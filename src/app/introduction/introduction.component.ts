import { Component, OnInit } from '@angular/core';
import {Introduction} from "./introduction";
import {IntroductionService} from "./introduction.service";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['introduction.component.scss'],
  providers : [IntroductionService]
})
export class IntroductionComponent implements OnInit {

  private introduction : Introduction;

  constructor(private _service : IntroductionService) {

  }

  ngOnInit() {
    this._service.get().subscribe((introduction) => {
      console.log(introduction);
      this.introduction = introduction;
    })
  }

}
