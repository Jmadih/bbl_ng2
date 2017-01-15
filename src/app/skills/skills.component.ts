import { Component, OnInit } from '@angular/core';
import {SkillsService} from "./skills.service";
import {Skills} from "./skills";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills : Observable<Skills[]>;
  ngVersion : number;

  constructor(private _service : SkillsService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.skills = this._route.snapshot.data['skills'];
    this.ngVersion = 1;
  }

  generateSkill(){
    let id = new Date().getTime()+"";
    let title =  "Angular "+ (++this.ngVersion);
    let score = 95;
    let img = "/assets/images/ng2.svg";
    let skill : Skills = new Skills();
    skill.id = id;
    skill.title = title;
    skill.score = score;
    skill.img = img;
    this._service.add(skill).subscribe((skills) => { this.skills = skills});
  }

  delete(){

  }

  update(){

  }
}
