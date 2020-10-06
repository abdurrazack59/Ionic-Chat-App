import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PushnotificationPage } from './pushnotification.page';

const routes: Routes = [
  {
    path: '',
    component: PushnotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PushnotificationPageRoutingModule {}
