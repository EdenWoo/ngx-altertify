import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxAlertifyModule} from '../../projects/ngx-alertify/src/lib/ngx-alertify.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAlertifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
