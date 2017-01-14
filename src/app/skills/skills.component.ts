import { Component, OnInit } from '@angular/core';
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

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.skills = this._route.snapshot.data['skills'];
  }

}
