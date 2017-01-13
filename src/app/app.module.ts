import { NgModule } from '@angular/core';

import {AppComponent } from './app.component';
import {IntroductionComponent } from './introduction/introduction.component';
import {CoreModule} from "./core/core.module";
import {LayoutModule} from "./layout/layout.module";
import {SharedModule} from "./shared/shared.module";
import { SkillsComponent } from './skills/skills.component';
import {SkillsResolve} from "./skills/skills.resolve";
import {SkillsService} from "./skills/skills.service";


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    SkillsComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    LayoutModule
  ],
  providers: [SkillsService, SkillsResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
