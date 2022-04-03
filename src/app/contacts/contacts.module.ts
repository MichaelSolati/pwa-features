import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [ContactsComponent, ContactComponent],
  imports: [CommonModule, ContactsRoutingModule, IonicModule],
})
export class ContactsModule {}
