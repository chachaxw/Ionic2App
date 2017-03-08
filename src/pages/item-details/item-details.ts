import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IService } from '../../services/IService';

@Component({
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {

  page: any;
  service: IService;
  params: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.page = navParams.get('page');
    this.service = navParams.get("service");
    this.params = this.service.prepareParams(this.page, navCtrl);
  }
}
