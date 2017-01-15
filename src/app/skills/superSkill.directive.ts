import {Directive, ElementRef, Renderer, Input} from '@angular/core';

@Directive({
  selector: '[super-skill]'
})
export class SuperSkillDirective {

  @Input() score;

  constructor(private _el: ElementRef, private _rd: Renderer) {
  }

  ngOnInit() {
    if(this.score && this.score > 90) {
      let star = '<img md-card-avatar src="assets/images/star.png">';
      this._rd.setElementProperty(this._el.nativeElement, 'innerHTML', star);
    }
  }
}
