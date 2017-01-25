import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable, Inject} from "@angular/core";
import {SkillsService} from "./skills.service";

@Injectable()
export class SkillsResolve implements Resolve<any> {

  constructor(@Inject(SkillsService) private skillsService : SkillsService){}

  resolve(route : ActivatedRouteSnapshot){
    return this.skillsService.get();
  }
}
