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
  special : string = "assets/images/star.png";

  constructor(private _service : SkillsService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.skills = this._route.snapshot.data['skills'];
  }

  generateSkill(){
    let id = new Date().getTime()+"";
    let title =  "Angular 1";
    let score = 80;
    let img = "/assets/images/ng1.png";
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
