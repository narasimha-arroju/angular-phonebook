import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ContactService} from "./contact.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
