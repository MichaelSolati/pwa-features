import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'pwa-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Input() contact: {
    icon: Blob[];
    name: string[];
    tel: string[];
  } = {
    icon: [],
    name: [],
    tel: [],
  };
  icon: Blob | undefined;
  name: string | undefined;
  tel: string | undefined;
  src: SafeUrl | undefined;

  constructor(private _ds: DomSanitizer) {}

  ngOnInit(): void {
    this.icon = this.contact.icon.shift();
    this.name = this.contact.name.shift();
    this.tel = this.contact.tel.shift();
    const src = this.icon ? URL.createObjectURL(this.icon) : false;
    this.src = src ? this._ds.bypassSecurityTrustUrl(src) : undefined;
  }

  call(): void {
    if (!this.tel) return;
    window?.open(`tel:${this.tel}`);
  }
}
