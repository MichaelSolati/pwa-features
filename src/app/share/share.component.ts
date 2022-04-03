import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pwa } from 'pwafire';
import { lastValueFrom } from 'rxjs';
import { ToastService } from '../core/services/toast.service';

type ShareableContent = {
  src: string;
  title: string;
  text: string;
  url?: string;
  files?: File[];
};

@Component({
  selector: 'pwa-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  shareableContent: ShareableContent[] = [
    {
      src: './assets/google-developers.jpg',
      title: 'Google Developers',
      text: 'Everything you need to build better apps.',
      url: 'https://developers.google.com/',
    },
    {
      src: './assets/100CoolWebMoments.avif',
      title: '#100CoolWebMoments',
      text: 'Take a scroll down memory lane...',
      url: 'https://developer.chrome.com/100/',
    },
  ];

  constructor(private _http: HttpClient, private _tc: ToastService) {}

  async ngOnInit(): Promise<void> {
    const downasaurBlob = await lastValueFrom(
      this._http.get('./assets/downasaur.svg', { responseType: 'blob' })
    );
    const downasaurFile = new File([downasaurBlob], 'downasaur.svg', { type: 'image/svg+xml' });
    this.shareableContent.push({
      src: './assets/downasaur.svg',
      title: 'Downasaur',
      text: 'Here is a downasaur.',
      files: [downasaurFile],
    });
  }

  async share(content: ShareableContent): Promise<void> {
    try {
      const res = await pwa.Share(content);
      if (!res.ok) {
        await this._tc.make(res.message);
      }
    } catch (e: any) {
      await this._tc.make(e);
    }
  }
}
