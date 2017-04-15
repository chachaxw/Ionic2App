import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';

// import { ItemDetailsPageFullScreenGallery } from '../item-details-full-screen-gallery/item-details-full-screen-gallery';

@Component({
    templateUrl: 'item-details-sub-image-gallery.html'
})

export class ItemDetailsPageSubImageGallery {
    page: any;
    service: IService;
    params: any;

    constructor(public navCtrl: NavController, navParams: NavParams) {
        let layoutNumber =  navParams.get('layout');
        this.params = {};
        this.params.events =navParams.get('events');
        this.params.data = navParams.get('group');
        this.params['subImageGalleryLayout' + layoutNumber] = true
        this.params.data.fullscreen = ItemDetailsPageFullScreenGallery;
    }
}
