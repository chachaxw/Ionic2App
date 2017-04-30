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
import { ItemDetailsPageParallax } from '../item-details-parallax/item-details-parallax';
import { ItemDetailsPageLoginAndRegister } from '../item-details-login-register/item-details-login-register';
import { ItemDetailsPageImageGallery } from '../item-details-image-gallery/item-details-image-gallery';
import { ItemDetailsPageSearchBar } from '../item-details-search-bar/item-details-search-bar';
import { ItemDetailsPageCheckBox } from '../item-details-check-box/item-details-check-box';

import { SplashScreenService } from '../../services/splash-screen-service';
import { ListViewService } from '../../services/list-view-service';
import { ListViewAppearanceAnimationService } from '../../services/list-view-appearance-animation-service';
import { ListViewDragAndDropService } from '../../services/list-view-drag-and-drop-service';
import { ListViewExpandableService } from '../../services/list-view-expandable-service';
import { ListViewGoogleCardsService } from '../../services/list-view-google-card-service';
import { ListViewSwipeToDismissService } from '../../services/list-view-swipe-to-dismiss-service';
import { ParallaxService } from '../../services/parallax-service';
import { LoginRegisterService } from '../../services/login-register-service';
import { ImageGalleryService } from '../../services/image-gallery-service';
import { SearchBarService } from '../../services/search-bar-service';
import { CheckBoxService } from '../../services/check-box-service';

@Component({
  templateUrl: 'items.html',
  providers: [SplashScreenService, ListViewService, ListViewAppearanceAnimationService, ListViewDragAndDropService,
    ListViewExpandableService, ListViewGoogleCardsService, ListViewSwipeToDismissService, ParallaxService, LoginRegisterService,
    ImageGalleryService, SearchBarService, CheckBoxService]
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
    private checkBoxService: CheckBoxService,
    private listViewService: ListViewService,
    private parallaxService: ParallaxService,
    private searchBarService: SearchBarService,
    private splashScreenService: SplashScreenService,
    private imageGalleryService: ImageGalleryService,
    private loginRegisterService: LoginRegisterService,
    private listViewDragAndDropService: ListViewDragAndDropService,
    private listViewExpandableService: ListViewExpandableService,
    private listViewGoogleCardsService: ListViewGoogleCardsService,
    private listViewSwipeToDismissService: ListViewSwipeToDismissService,
    private listViewAppearanceAnimationService: ListViewAppearanceAnimationService) {

    this.listServices = {
      'parallax': parallaxService,
      'checkBox': CheckBoxService,
      'listViews': listViewService,
      'searchBars': searchBarService,
      'loginPages': loginRegisterService,
      'imageGallery': imageGalleryService,
      'splashScreens': splashScreenService,
      'expandable': listViewExpandableService,
      'googleCards': listViewGoogleCardsService,
      'dragAndDrop': listViewDragAndDropService,
      'swipeToDismiss': listViewSwipeToDismissService,
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
    } else if (value === "dragAndDrop") {
      page = ItemDetailsPageDragAndDrop;
    } else if (value === "expandable") {
      page = ItemDetailsPageExpandable;
    } else if (value === "googleCards") {
      page = ItemDetailsPageGoogleCard;
    } else if (value === "swipeToDismiss") {
      page = ItemDetailsPageSwipeToDismiss;
    } else if (value === "parallax") {
      page = ItemDetailsPageParallax;
    } else if (value === "loginPages") {
      page = ItemDetailsPageLoginAndRegister;
    } else if (value === "imageGallery") {
      page = ItemDetailsPageImageGallery;
    } else if (value === "searchBars") {
      page = ItemDetailsPageSearchBar;
    } else if (value === 'checkBox') {
      page = ItemDetailsPageCheckBox;
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
