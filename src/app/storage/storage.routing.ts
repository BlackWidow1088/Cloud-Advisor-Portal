import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorageLayoutComponent } from './storage-layout/storage-layout.component';

const routes: Routes = [
  {
    path: 'home',
    component: StorageLayoutComponent,
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
export class StorageRoutingModule { }
