import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {IService} from '../../services/IService';


@Component({
  templateUrl: 'item-details-expandable.html',
})

export class ItemDetailsPageExpandable {

  page: any;
  service: IService;
  params: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.page = navParams.get('page');
    this.service =  navParams.get('service');
    this.params = this.service.prepareParams(this.page, navCtrl);
  }

  doRefresh(refresher) {
      setTimeout(() => {
        refresher.complete();
      }, 2000);
  }
}