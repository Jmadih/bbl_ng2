import { Component, OnInit } from '@angular/core';
import {IntroductionService} from "./introduction.service";
import {Introduction} from "./introduction";

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
      this.introduction = introduction;
    })
  }

}
