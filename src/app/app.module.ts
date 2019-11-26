/**
 * @orderOfImports
 * 1) Angular Imports
 * 2) Third Party Imports
 * 3) App Imports
 *  a) Modules
 *  b) Services
 *  c) Components
 *  d) Directives
 *  e) Pipes
 *  f) Models
 *  g) constants/environment variables
 */
// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// Third Party Imports


// App Imports
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
