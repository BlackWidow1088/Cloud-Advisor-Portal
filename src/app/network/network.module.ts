import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

import { SharedModule } from '../shared/shared.module';
import { NetworkRoutingModule } from './network.routing';
import { NetworkLayoutComponent } from './network-layout/network-layout.component';
import { NetworkComponent } from './network.component';

@NgModule({
  imports: [
    SharedModule,
    NetworkRoutingModule
  ],
  declarations: [
    NetworkLayoutComponent,
    NetworkComponent
  ]
})
export class NetworkModule {
 constructor() {
  if (!environment.production) {
    console.log('created network module');
  }
 }
}
