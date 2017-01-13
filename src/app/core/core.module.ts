import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdModule } from './md.module';
import {AppRoutingModule} from "../app.routing";

@NgModule({
  providers: [],
  exports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MdModule,
    AppRoutingModule
  ]
})
export class CoreModule { }
