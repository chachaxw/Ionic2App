import {IService} from './IService';

export class TabsService implements IService {

  constructor() {}

  getId = ():string => 'tabs';

  getTitle = ():string => 'Tabs';

  getAllThemes = (): Array<any> => {
    return [
      {"title" : "Footer tab - text", "theme"  : "layout1"},
      {"title" : "Footer tab - icons", "theme"  : "layout2"},
      {"title" : "Header tab - text", "theme"  : "layout3"}
    ];
  };

  getDataForTheme = (menuItem: any): Array<any> => {
    return this[
      'getDataFor' +
      menuItem.theme.charAt(0).toUpperCase() +
      menuItem.theme.slice(1)
    ]();
  };

  getDataForLayout1 = (): Array<any> => {
     return [];
  };

  getDataForLayout2 = (): Array<any> => {
     return [];
  };

  getDataForLayout3 = (): Array<any> => {
     return [];
  };

  getEventsForTheme = (menuItem: any): any => {
    return {};
  };

  prepareParams = (item: any) => {
    let result = {
      title: item.title,
      data: this.getDataForTheme(item),
      events: this.getEventsForTheme(item)
    };
    result[this.getShowItemId(item)] = true;
    return result;
  };

  getShowItemId = (item: any):string => {
    console.log(this.getId()  + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1));
    return this.getId()  + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
  }
}
