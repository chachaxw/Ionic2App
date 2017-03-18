import { Component, Input } from '@angular/core';

@Component({
    selector: 'appearance-animation-layout-1',
    templateUrl: 'appearance-animation-layout-1.html'
})

export class AppearanceAnimationLayout1 {
    @Input() data: any;
    @Input() events: any;

    animateItems = [];
    animateClass: any;

    constructor() {
        this.animateClass = { 'fade-in-left-item': true };
    }

    onEvent(event: string, item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    }

    ngAfterViewInit() {
        let that = this;
        for (let i = 0; i < that.data.items.length; i++) {
            setTimeout(function() {
                that.animateItems.push(that.data.items[i]);
            }, 200 * i);
        }
    }
}
