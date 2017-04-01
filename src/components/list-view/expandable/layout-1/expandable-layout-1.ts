import {Component, Input} from '@angular/core';

@Component({
    selector: 'expandable-layout-1',
    templateUrl: 'expandable.html'
})

export class ExpandableLayout1 {
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

  toggleGroup(group:any) {
   group.show = !group.show;
  }

  isGroupShown(group:any) {
    return group.show;
  }
}
