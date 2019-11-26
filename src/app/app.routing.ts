import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./storage/storage.module').then(mod => mod.StorageModule),
  },
  {
    path: 'network',
    loadChildren: () => import('./network/network.module').then(mod => mod.NetworkModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
