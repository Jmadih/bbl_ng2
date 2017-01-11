import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  private title: string = 'app works!';

  constructor(){}

  public getTitle() : string {
    return this.title+" from function";
  }
}
