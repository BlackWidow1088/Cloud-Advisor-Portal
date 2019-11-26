import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

import { SharedModule } from '../shared/shared.module';
import { StorageRoutingModule } from './storage.routing';
import { StorageLayoutComponent } from './storage-layout/storage-layout.component';
import { StorageComponent } from './storage.component';

@NgModule({
  imports: [
    SharedModule,
    StorageRoutingModule
  ],
  declarations: [
    StorageLayoutComponent,
    StorageComponent
  ]
})
export class StorageModule {
 constructor() {
  if (!environment.production) {
    console.log('created shared module');
  }
 }
}
