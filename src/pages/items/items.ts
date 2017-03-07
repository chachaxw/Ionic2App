import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';

@Component({
  templateUrl: 'items.html',
})

export class ItemsPage {
  title: string;
  componentName: string;
  pages: any;
  listServices : { [key:string]:IService; } = {};
  service: IService;

  // services: array
  constructor(
    public navCtrl: NavController,
    navParams: NavParams) {
    this.listServices = {};

    this.componentName = navParams.get('componentName');
    this.service = this.listServices[this.componentName];

    if (this.service) {
      this.pages = this.service.getAllThemes();
      this.title = this.service.getTitle();
    }
  }

  selectPageForOpen(value:string):any {

  }

  openPage(page:any) {

  }
}
