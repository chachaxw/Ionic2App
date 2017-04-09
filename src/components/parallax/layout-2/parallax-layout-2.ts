import {Component, Input} from '@angular/core';

@Component({
    selector: 'parallax-layout-2',
    templateUrl: 'parallax-layout-2.html'
})

export class ParallaxLayout2 {
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
