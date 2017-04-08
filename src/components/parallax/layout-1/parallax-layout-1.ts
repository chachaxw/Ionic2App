import {Component, Input} from '@angular/core';

@Component({
    selector: 'parallax-layout-1',
    templateUrl: 'parallax-layout-1.html'
})

export class ParallaxLayout1 {
  @Input() data: any;
  @Input() events: any;

  constructor() {}

  onEvent(event:string, item:any, e:any) {
    if (e) {
      e.stopPropagation();
    }
    if (this.events[event]) {
      this.events[event](item);
    }
  }
}
