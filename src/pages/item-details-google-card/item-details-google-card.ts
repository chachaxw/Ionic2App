import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {IService} from '../../services/IService';

@Component({
  templateUrl: 'item-details-google-card.html'
})

export class ItemDetailsPageGoogleCard {

  page: any;
  service: IService;
  params: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.page = navParams.get('page');
    this.service =  navParams.get('service');
    this.params = this.service.prepareParams(this.page, navCtrl);
  }
}
