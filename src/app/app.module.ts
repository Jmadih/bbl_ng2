import { NgModule } from '@angular/core';

import {AppComponent } from './app.component';
import {IntroductionComponent } from './introduction/introduction.component';
import {CoreModule} from "./core/core.module";
import {LayoutModule} from "./layout/layout.module";
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
