import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AboutComponent } from './about.component';
import {AboutRoutes} from "./about.route";
import {MdModule} from "../core/md.module";

@NgModule({
    imports: [AboutRoutes, MdModule],
    exports: [],
    declarations: [AboutComponent],
    providers: []
})
export class AboutModule { }
