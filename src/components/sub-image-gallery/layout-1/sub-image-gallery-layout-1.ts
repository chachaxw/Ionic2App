import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'sub-image-gallery-layout-1',
  templateUrl: 'sub-image-gallery-layout-1.html'
})

export class SubImageGalleryLayout1 {

  @Input() data: any;
  @Input() events: any;

  constructor(public navCtrl: NavController, navParams: NavParams) { }

  onEvent = (event: string, item, e): void => {
    if (e) {
      e.stopPropagation();
    }
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  openImageSlider = (group: any, index: number): any => {
    this.navCtrl.push(group.fullscreen, {
      'group': group.items,
      'index': index
    });
  }
}
