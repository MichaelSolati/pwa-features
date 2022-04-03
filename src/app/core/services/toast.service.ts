import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private _tc: ToastController) {}

  async make(content: string | Error): Promise<HTMLIonToastElement> {
    const toast = await this._tc.create({
      message: typeof content === 'string' ? content : content.message,
      duration: 3000,
    });
    toast.present();
    return toast;
  }
}
