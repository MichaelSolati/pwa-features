import { Component } from '@angular/core';
import { pwa } from 'pwafire';
import { ToastService } from '../core/services/toast.service';

@Component({
  selector: 'pwa-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  contacts: null | any[] = null;

  constructor(private _tc: ToastService) {}

  async getContacts(): Promise<void> {
    const props = ['name', 'tel', 'icon'];
    const options = { multiple: true };
    const res = await pwa.Contacts(props, options);
    if (res.ok) {
      this.contacts = res.contacts;
    } else {
      await this._tc.make(res.message);
    }
  }
}
