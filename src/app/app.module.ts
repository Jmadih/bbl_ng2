import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MenubarComponent } from './layout/menubar/menubar.component';
import { FooterComponent } from './layout/footer/footer.component';
import {MdModule} from "./md.module";

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    MenubarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
