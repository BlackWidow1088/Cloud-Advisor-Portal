import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkLayoutComponent } from './network-layout/network-layout.component';

const routes: Routes = [
  {
    path: 'home',
    component: NetworkLayoutComponent,
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkRoutingModule { }
