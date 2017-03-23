import { Component, Input } from '@angular/core';
import { reorderArray } from 'ionic-angular';

@Component({
    selector: 'drag-and-drop-layout-1',
    templateUrl: 'drag-and-drop.html'
})

export class DragAndDropLayout1 {

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

    reorderItems = (indexes): void => {
        this.data.items = reorderArray(this.data.items, indexes);
    }

}
