import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {RouterModule} from '@angular/router';
import {FooterComponent} from "./footer/footer.component";
import {MenubarComponent} from "./menubar/menubar.component";
import {MdModule} from "../core/md.module";

@NgModule({
  imports: [RouterModule, MdModule],
  declarations: [FooterComponent, MenubarComponent],
  exports: [FooterComponent, MenubarComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LayoutModule {

}
