import { NgModule } from '@angular/core';

import {AppComponent } from './app.component';
import {IntroductionComponent } from './introduction/introduction.component';
import {CoreModule} from "./core/core.module";
import {LayoutModule} from "./layout/layout.module";
import {SharedModule} from "./shared/shared.module";
import { SkillsComponent } from './skills/skills.component';
import {SkillsResolve} from "./skills/skills.resolve";
import {SkillsService} from "./skills/skills.service";
import {SuperSkillDirective} from "./skills/superSkill.directive";
import {AboutModule} from "./about/about.module";
import {AppRouting} from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    SkillsComponent,
    SuperSkillDirective
  ],
  imports: [
    CoreModule,
    SharedModule,
    LayoutModule,
    AppRouting,
    AboutModule
  ],
  providers: [
    SkillsService,
    SkillsResolve,
    { provide: 'CanAlwaysActivateGuard',
      useValue: () => {
        return true;
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
