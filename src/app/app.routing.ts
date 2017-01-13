import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IntroductionComponent} from "./introduction/introduction.component";
import {SkillsComponent} from "./skills/skills.component";
import {SkillsResolve} from "./skills/skills.resolve";


const routes: Routes = [
  {path: '', redirectTo: 'introduction', pathMatch: 'full'},
  { path : 'introduction', component: IntroductionComponent},
  { path : 'skills', component: SkillsComponent, resolve: {skills: SkillsResolve} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

