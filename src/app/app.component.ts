import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuService } from '../services/menu-service';
import { HomePage } from '../pages/home/home';
import { ItemsPage } from '../pages/items/items';

@Component({
  templateUrl: 'app.html',
  providers: [MenuService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = HomePage;
  pages: any;
  leftMenuTitle: string;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public menu: MenuController,
    public menuService: MenuService) {
    this.initializeApp(platform, statusBar, splashScreen);
    this.pages = menuService.getAllThemes();
    this.leftMenuTitle = menuService.getTitle();
    // console.log(this.pages, this.leftMenuTitle);
  }

  initializeApp(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(ItemsPage, {
      componentName: page.theme
    });
  }
}
