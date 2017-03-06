import {NavController} from 'ionic-angular';

export interface IService {
  getAllThemes():Array<any>;
  getTitle():string;
  getId():string;
  getDataForTheme(menuItem: any): Array<any>;
  getEventsForTheme(menuItem: any, navCtrl: NavController): Array<any>;
  prepareParams(menuItem: any, navCtrl: NavController):any;
}
