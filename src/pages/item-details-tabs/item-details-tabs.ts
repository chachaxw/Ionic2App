import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {IService} from '../../services/IService';

import {TabPage1} from '../tab-page-1/tab-page-1';
import {TabPage2} from '../tab-page-2/tab-page-2';
import {TabPage3} from '../tab-page-3/tab-page-3';

import {TabPage4} from '../tab-page-4/tab-page-4';
import {TabPage5} from '../tab-page-5/tab-page-5';
import {TabPage6} from '../tab-page-6/tab-page-6';

@Component({
  templateUrl: 'item-details-tabs.html'
})

export class ItemDetailsPageTabs {

  page: any;
  service: IService;
  params: any;


  TabPage1Root: any = TabPage1;
  TabPage2Root: any = TabPage2;
  TabPage3Root: any = TabPage1;
  TabPage4Root: any = TabPage2;
  TabPage5Root: any = TabPage1;
  TabPage6Root: any = TabPage2;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.page = navParams.get('page');
    this.service =  navParams.get('service');
    this.params = this.service.prepareParams(this.page, navCtrl);

    if (this.params.tabsLayout1) {
      this.params.data = [
        { page: TabPage1, title: "tab 1"},
        { page: TabPage2, title: "tab 2"},
        { page: TabPage3, title: "tab 3"}
      ];
    }

    if (this.params.tabsLayout2) {
      this.params.data = [
        { page: TabPage4, icon: "heart"},
        { page: TabPage5, icon: "star"},
        { page: TabPage6, icon: "settings"}
      ];
    }

    if (this.params.tabsLayout3) {
      this.params.data = [
        { page: TabPage1, title: "tab 1"},
        { page: TabPage2, title: "tab 2"},
        { page: TabPage3, title: "tab 3"},
        { page: TabPage4, title: "tab 4"}
      ];
    }
    console.log(this.params);
  }
}
