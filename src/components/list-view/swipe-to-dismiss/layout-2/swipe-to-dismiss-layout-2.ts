import { Component, Input } from '@angular/core';
import { ItemSliding } from 'ionic-angular';

@Component({
  selector: 'swipe-to-dismiss-layout-2',
  templateUrl: 'swipe-to-dismiss.html'
})

export class SwipeToDismissLayout2 {
  @Input() data: any;
  @Input() events: any;
  constructor() { }

  onEvent(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  undo = (slidingItem: ItemSliding) => {
    slidingItem.close();
  }

  delete = (item: any): void => {
    let index = this.data.items.indexOf(item);
    if (index > -1) {
      this.data.items.splice(index, 1);
    }
  }

}
