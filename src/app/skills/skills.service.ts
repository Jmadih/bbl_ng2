import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {BASE_URL} from "../shared/constants";
import {Skill} from "./skill";
import {Observable} from "rxjs";

@Injectable()
export class SkillsService {

  constructor(private _http: Http) { }

  get(): Observable<Skill[]>{
    return this._http.get(`${BASE_URL}/api/skills`)
      .map( res => res.json());
  }

  add(form : Skill): Observable<Skill[]>{
    return this._http.post(`${BASE_URL}/api/skills`, form)
      .map( res => res.json() );
  }

}

