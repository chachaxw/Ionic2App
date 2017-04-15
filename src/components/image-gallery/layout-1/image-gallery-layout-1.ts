import {Component, Input} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector: 'image-gallery-layout-1',
    templateUrl: 'image-gallery-layout-1.html'
})

export class ImageGalleryLayout1 {
  @Input() data: any;
  @Input() events: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {}

  openSubGallery = (group:any, index:number): any => {
    this.navCtrl.push(group.subGallery, {
      'group': group.items[index],
      'events': this.events,
      'layout': 1
    });
  }

  onEvent = (event: string, item, e): void => {
      if (e) {
          e.stopPropagation();
      }
      if (this.events[event]) {
        this.events[event](item);
      }
  }
}
