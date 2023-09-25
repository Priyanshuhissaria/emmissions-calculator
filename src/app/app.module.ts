import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PapaParseModule } from 'ngx-papaparse';
import { UserInputModule } from './modules/user-input/user-input.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PapaParseModule,
    UserInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
