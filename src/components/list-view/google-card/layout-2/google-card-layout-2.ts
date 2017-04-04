import { Component, Input } from '@angular/core';

@Component({
    selector: 'google-card-layout-2',
    templateUrl: 'google-card-layout-2.html'
})

export class GoogleCardLayout2 {
    @Input() data: any;
    @Input() events: any;
    slider = {};
    constructor() { }

    slideHasChanged(slider, index): void {
        this.slider[index] = slider;
        if (2 == slider._activeIndex) {
            if (this.data.items) {
                this.data.items.splice(index, 1);
            } else {
                this.data.splice(index, 1);
            }
        }
    }

    onClickEvent(index): void {
      if (this.slider[index]) {
        this.slider[index].slidePrev(300);
      }
    }

    onEvent(event: string, item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    }
}
