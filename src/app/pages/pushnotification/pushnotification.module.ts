import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PushnotificationPageRoutingModule } from './pushnotification-routing.module';

import { PushnotificationPage } from './pushnotification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PushnotificationPageRoutingModule
  ],
  declarations: [PushnotificationPage]
})
export class PushnotificationPageModule {}
