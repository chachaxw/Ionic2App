import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
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
    public platform: Platform,
    public menu: MenuController,
    public menuService: MenuService) {
    this.initializeApp();
    this.pages = menuService.getAllThemes();
    this.leftMenuTitle = menuService.getTitle();
    // console.log(this.pages, this.leftMenuTitle);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
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
