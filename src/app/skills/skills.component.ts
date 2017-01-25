import { Component, OnInit } from '@angular/core';
import {SkillsService} from "./skills.service";
import {Skill} from "./skill";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Mode} from "../shared/mode.enum";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills : Observable<Skill[]>;
  ngVersion : number;
  dialogStatus : string;
  mode : Mode;
  model : Skill;

  constructor(private _service : SkillsService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.skills = this._route.snapshot.data['skills'];
    this.ngVersion = 1;
  }

  generateSkill(){
    let id = new Date().getTime()+"";
    let title =  "Angular "+ (++this.ngVersion);
    let score = null;
    let img = "/assets/images/ng2.svg";
    let skill : Skill = new Skill();
    skill.id = id;
    skill.title = title;
    skill.score = score;
    skill.img = img;
    this._service.add(skill).subscribe((skills) => { this.skills = skills});
  }

  add(){
    this.mode = Mode.ADD;
    this.model = new Skill();
    this.showDialog();
  }

  edit(model){
    this.mode = Mode.EDIT;
    this.model = model;
    this.showDialog();
  }

  delete(model){
    this._service.delete(model._id).subscribe((skills) => {
      this.skills = skills;
    });
  }

  showDialog(){
    this.dialogStatus = 'active';
  }

  hideDialog(){
    this.dialogStatus = 'desactivate';
  }

  save(model){
    if(this.mode == Mode.EDIT) {
      this._service.update(model).subscribe((skills) =>{
        this.skills = skills,
          this.hideDialog()
      });
    }else {
      model._img = "/assets/images/ng2.svg";
      this._service.add(model).subscribe((skills) =>{
        this.skills = skills,
          this.hideDialog();
      });
    }
  }
}
