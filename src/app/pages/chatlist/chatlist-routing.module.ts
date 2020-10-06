import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatlistPage } from './chatlist.page';


const routes: Routes = [
  {
    path: '',
    component: ChatlistPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ChatlistPageRoutingModule {}
