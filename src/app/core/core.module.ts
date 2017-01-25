import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdModule} from "./md.module";

@NgModule({
  providers: [],
  exports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MdModule
  ]
})
export class CoreModule { }
