import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {SkillsService} from "./skills.service";

@Injectable()
export class SkillsResolve implements Resolve<any> {

  constructor(private skillsService : SkillsService){}

  resolve(route : ActivatedRouteSnapshot){
    return this.skillsService.get();
  }
}
