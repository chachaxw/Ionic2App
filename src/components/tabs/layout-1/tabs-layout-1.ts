import { Component, Input } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
    selector: 'tabs-layout-1',
    templateUrl: 'tabs.html'
})

export class TabsLayout1 {
    @Input('data') data: any;
    @Input('events') events: any;
    @ViewChild('tabs') tabRef: any;

    constructor() { }
}
