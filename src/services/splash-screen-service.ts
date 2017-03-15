import { IService } from './IService';
import { NavController } from 'ionic-angular';

export class SplashScreenService implements IService {
  constructor() {}

  getId = ():string => "SplashScreen";

  getTitle = ():string => 'Splash screens';

  getAllThemes = (): Array<any> => {
    return [
      {"title" : "Fade in + Ken Burns 1", "theme"  : "layout1"},
      {"title" : "Down + fade in + Ken Burns", "theme"  : "layout2"},
      {"title" : "Down + Ken Burns", "theme"  : "layout3"}
    ];
  };

  getDataForTheme = (menuItem: any): Array<any> => {
    return this[
      'getDataFor' +
      menuItem.theme.charAt(0).toUpperCase() +
      menuItem.theme.slice(1)
    ]();
  };

  getDataForLayout1 = (): any => {
    return {
        "duration" : 10000,
        "backgroundImage" : 'assets/images/background/29.jpg',
        "logo" : 'assets/images/logo/login.png',
        "title" : "IONICTEMPLATE"
    };
  }

  getDataForLayout2 = (): any => {
    return {
      "duration" : 10000,
      "backgroundImage" : 'assets/images/background/29.jpg',
      "logo" : 'assets/images/logo/login.png',
      "title" : "IONICTEMPLATE"
    };
  };

  getDataForLayout3 = (): any => {
    return {
      "duration" : 10000,
      "backgroundImage" : 'assets/images/background/29.jpg',
      "logo" : 'assets/images/logo/login.png',
      "title" : "IONICTEMPLATE"
    };
  };

  getEventsForTheme = (menuItem: any, navCtrl: NavController): any => {
    return {
      "onRedirect" : function() {
        navCtrl.pop();
      }
    };
  };

  getShowItemId = (item: any):string => {
    return this.getId()  + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
  };

  prepareParams = (item: any, navCtrl: NavController) => {
    let result = {
      title: item.title,
      data: this.getDataForTheme(item),
      events: this.getEventsForTheme(item, navCtrl)
    };
    result[this.getShowItemId(item)] = true;
    return result;
  };

}
