// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Third Party Imports
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { MenuModule } from 'primeng/menu';
import { ContextMenuModule } from 'primeng/contextmenu';

// App Imports
// a) Modules
// b) Services
import { ListViewService } from './list-view/shared/list-view.service';
// c) Components
import { ListViewComponent } from './list-view/list-view.component';
import { ListViewRowComponent } from './list-view/list-view-row/list-view-row.component';
import { ListViewCellComponent } from './list-view/list-view-cell/list-view-cell.component';
import { SearchBoxComponent } from './search-box/search-box.component';
// d) Directives
// e) Pipes
// f) Models
// g) constants
import { environment } from 'src/environments/environment';
/**
 * @description
 * collection of dumb components, pipes, filters which can be used by different
 * Feature Modules.
 * DONT include singleton services in Shared Module.
 * EXCEPTION stateless services can be included in Shared module which will be
 * instantiated everytime whenever Shared module is imported in Feature Module.
 *
 * @example
 * ListViewService will be instantiated every time in Storage, Network Module
 *
 * @Note
 * 1) services inside Shared Module are not globally singleton.
 * they will be created again inside Feature Module after importing Shared Module.
 * Replace '@Injectable({'providedIn' : 'root'}) with '@Injectable()'
 * inside Shared Module Services.
 * 2) be careful while importing and exporting components, pipes, directives, services from Shared Module. They will be recreated inside
 * every lazy-loaded module whenever loaded for the first time.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    MultiSelectModule,
    MenuModule,
    ContextMenuModule
  ],
  providers: [
    ListViewService
  ],
  declarations: [
    ListViewComponent,
    ListViewRowComponent,
    ListViewCellComponent,
    SearchBoxComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ListViewComponent,
    SearchBoxComponent
  ]
})
export class SharedModule {
  constructor() {
    if (!environment.production) {
      console.log('created shared module');
    }
  }
}
