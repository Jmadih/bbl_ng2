import { Component, OnInit } from '@angular/core';
import {Introduction} from "./introduction";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['introduction.component.scss'],
  providers : []
})
export class IntroductionComponent implements OnInit {

  private introduction : Introduction;

  constructor() {
    this.introduction = new Introduction();
  }

  ngOnInit() {
    this.introduction.firstname = "Jaafar";
    this.introduction.lastname = "MADIH"
    this.introduction.description = "Une description ...";
    this.introduction.imageUrl = "assets/images/user.png";
  }

}
