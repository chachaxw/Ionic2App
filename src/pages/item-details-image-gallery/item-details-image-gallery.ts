import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';

import { ItemDetailsPageSubImageGallery } from '../item-details-sub-image-gallery/item-details-sub-image-gallery';
// import { ItemDetailsPageFullScreenGallery } from '../item-details-full-screen-gallery/item-details-full-screen-gallery';

@Component({
  templateUrl: 'item-details-image-gallery.html'
})

export class ItemDetailsPageImageGallery {
  page: any;
  service: IService;
  params: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.page = navParams.get('page');
    this.service = navParams.get('service');
    this.params = this.service.prepareParams(this.page, navCtrl);
    this.params.data.subGallery = ItemDetailsPageSubImageGallery;
    // this.params.data.fullscreen = ItemDetailsPageFullScreenGallery;
  }
}
