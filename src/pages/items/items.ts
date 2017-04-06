import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';
import { ItemDetailsPage } from '../item-details/item-details';
import { ItemDetailsPageSplashScreen } from '../item-details-splash-screen/item-details-splash-screen';
import { ItemDetailsPageAppearanceAnimation } from '../item-details-appearance-animation/item-details-appearance-animation';
import { ItemDetailsPageDragAndDrop } from '../item-details-drag-and-drop/item-details-drag-and-drop';
import { ItemDetailsPageExpandable } from '../item-details-expandable/item-details-expandable';
import { ItemDetailsPageGoogleCard } from '../item-details-google-card/item-details-google-card';
import { ItemDetailsPageSwipeToDismiss } from '../item-details-swipe-to-dismiss/item-details-swipe-to-dismiss';

import { SplashScreenService } from '../../services/splash-screen-service';
import { ListViewService } from '../../services/list-view-service';
import { ListViewAppearanceAnimationService } from '../../services/list-view-appearance-animation-service';
import { ListViewDragAndDropService } from '../../services/list-view-drag-and-drop-service';
import { ListViewExpandableService } from '../../services/list-view-expandable-service';
import { ListViewGoogleCardsService } from '../../services/list-view-google-card-service';
import { ListViewSwipeToDismissService } from '../../services/list-view-swipe-to-dismiss-service';

@Component({
  templateUrl: 'items.html',
  providers: [SplashScreenService, ListViewService, ListViewAppearanceAnimationService, ListViewDragAndDropService,
    ListViewExpandableService, ListViewGoogleCardsService, ListViewSwipeToDismissService]
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
    private listViewAppearanceAnimationService: ListViewAppearanceAnimationService,
    private listViewDragAndDropService: ListViewDragAndDropService,
    private listViewExpandableService: ListViewExpandableService,
    private listViewGoogleCardsService: ListViewGoogleCardsService,
    private listViewSwipeToDismissService: ListViewSwipeToDismissService) {

    this.listServices = {
      'splashScreens': splashScreenService,
      'listViews': listViewService,
      'appearanceAnimation': listViewAppearanceAnimationService,
      'dragAndDrop': listViewDragAndDropService,
      'expandable': listViewExpandableService,
      'googleCards': listViewGoogleCardsService,
      'swipeToDismiss': listViewSwipeToDismissService,
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
    } else if (value === "dragAndDrop") {
      page = ItemDetailsPageDragAndDrop;
    } else if (value === "expandable") {
      page = ItemDetailsPageExpandable;
    } else if (value === "googleCards") {
      page = ItemDetailsPageGoogleCard;
    } else if (value === "swipeToDismiss") {
      page = ItemDetailsPageSwipeToDismiss;
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
