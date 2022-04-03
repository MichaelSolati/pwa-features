import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';

@NgModule({
  declarations: [ShareComponent],
  imports: [CommonModule, ShareRoutingModule, IonicModule, HttpClientModule],
})
export class ShareModule {}
