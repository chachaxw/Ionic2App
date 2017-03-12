import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';
import { ItemDetailsPage } from '../item-details/item-details';

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
    this.componentName = navParams.get('componentName');
    this.service = this.listServices[this.componentName];

    if (this.service) {
      this.pages = this.service.getAllThemes();
      this.title = this.service.getTitle();
    }
  }

  selectPageForOpen(value:string):any {
    let page = ItemDetailsPage;
    return page;
  }

  openPage(page:any) {
    if (page.listView) {
      this.navCtrl.push(ItemsPage, {
        componentName: page.theme
      });
    } else {
      this.navCtrl.push(this.selectPageForOpen(this.componentName), {
        service: this.service,
        page: page,
      });
    }
  }
}
