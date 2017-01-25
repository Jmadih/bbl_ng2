import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {BASE_URL} from "../shared/constants";

@Injectable()
export class SkillsService {

  constructor(private _http: Http) { }

  get(){
    return this._http.get(`${BASE_URL}/api/skills`)
      .map( res => res.json() );
  }

  add(form){
    return this._http.post(`${BASE_URL}/api/skills`, form)
      .map( res => res.json() );
  }

  update(form){
    return this._http.put(`${BASE_URL}/api/skills/${form._id}`, form)
      .map( res => res.json() );
  }

  delete(id){
    console.log(id);
    return this._http.delete(`${BASE_URL}/api/skills/${id}`)
      .map( res => res.json() );
  }
}

