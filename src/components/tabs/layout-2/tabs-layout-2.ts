import { Component, Input } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
    selector: 'tabs-layout-2',
    templateUrl: 'tabs.html'
})

export class TabsLayout2 {
    @Input('data') data: any;
    @Input('events') events: any;
    @ViewChild('tabs') tabRef: any;

    constructor() { }
}
