import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';
import { ItemDetailsPage } from '../item-details/item-details';
import { ItemDetailsPageSplashScreen } from '../item-details-splash-screen/item-details-splash-screen';
import { ItemDetailsPageAppearanceAnimation } from '../item-details-appearance-animation/item-details-appearance-animation';

import { SplashScreenService } from '../../services/splash-screen-service';
import { ListViewService } from '../../services/list-view-service';
import { ListViewAppearanceAnimationService } from '../../services/list-view-appearance-animation-service';

@Component({
  templateUrl: 'items.html',
  providers: [SplashScreenService, ListViewService, ListViewAppearanceAnimationService]
})

export class ItemsPage {
  title: string;
  componentName: string;
  pages: any;
  listServices : { [key:string]:IService; } = {};
  service: IService;

  // services: array
  constructor(
    navParams: NavParams,
    public navCtrl: NavController,
    private splashScreenService: SplashScreenService,
    private listViewService: ListViewService,
    private listViewAppearanceAnimationService: ListViewAppearanceAnimationService) {

    this.listServices = {
      'splashScreens': splashScreenService,
      'listViews': listViewService,
      'appearanceAnimation': listViewAppearanceAnimationService,
    };

    this.componentName = navParams.get('componentName');
    this.service = this.listServices[this.componentName];

    if (this.service) {
      this.pages = this.service.getAllThemes();
      this.title = this.service.getTitle();
    }
  }

  selectPageForOpen(value:string):any {
    let page = ItemDetailsPage;

    if (value === "splashScreens") {
      page = ItemDetailsPageSplashScreen;
    } else if (value === "appearanceAnimation") {
      page = ItemDetailsPageAppearanceAnimation;
    }

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
