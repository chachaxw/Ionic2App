import { Component, Input } from '@angular/core';
@Component({
  selector: 'check-box-layout-1',
  templateUrl: 'check-box.html'
})

export class CheckBoxLayout1 {
  @Input('data') data: any;
  @Input('events') events: any;

  constructor() {}

  onEvent = (event: string, item: any): void => {
    if (this.events[event]) {
      this.events[event](item);
    }
  }
}
