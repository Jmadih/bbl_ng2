import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {BASE_URL} from "../shared/constants";

@Injectable()
export class IntroductionService {

  constructor(private _http : Http) { }

  get(){
    return this._http.get(`${BASE_URL}/api/intro`)
      .map( res => res.json() );
  }
}
