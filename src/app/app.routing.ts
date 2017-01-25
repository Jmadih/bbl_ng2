import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IntroductionComponent} from "./introduction/introduction.component";
import {SkillsComponent} from "./skills/skills.component";
import {SkillsResolve} from "./skills/skills.resolve";

const routes: Routes = [
  {path: '', redirectTo: 'introduction', pathMatch: 'full'},
  {path : 'introduction', component: IntroductionComponent},
  {path : 'skills',
    component: SkillsComponent,
    resolve: {skills: SkillsResolve},
    canActivate : ['CanAlwaysActivateGuard']},
  {path : 'about',  loadChildren : 'app/about/about.module#AboutCompnent'}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
