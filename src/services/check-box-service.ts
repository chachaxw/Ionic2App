import { IService } from './IService';
import { Toast } from '@ionic-native/toast';

const toast = new Toast();

export class CheckBoxService implements IService {

  constructor() { }

  getId = (): string => 'checkBoxes';

  getTitle = (): string => 'Check Boxes';

  getAllThemes = (): Array<any> => {
    return [
      {"title" : "Simple", "theme"  : "layout1"},
      {"title" : "With Avatar", "theme"  : "layout2"}
    ];
  };

  getDataForTheme = (menuItem: any): any => {
    return this[
      'getDataFor' +
      menuItem.theme.charAt(0).toUpperCase() +
      menuItem.theme.slice(1)
    ]();
  };

  getEventsForTheme = (menuItem: any): any => {
    return {
      onButton: function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log(JSON.stringify(item));
        } else {
          toast.show(item.title, '1000', 'bottom').subscribe(toast => { });
        }
      }
    };
  };

  getDataForLayout1 = (): any => {
    return [
      {"id" : 1, "title"    : "Song", "icon"     : "", "favorite" : false, "image"    : ""},
      {"id" : 2, "title"    : "Album", "icon"     : "", "favorite" : false, "image"    : ""},
      {"id" : 3, "title"    : "Artist", "icon"     : "", "favorite" : false, "image"    : ""},
      {"id" : 4, "title"    : "Song", "icon"     : "", "favorite" : true, "image"    : ""},
      {"id" : 5, "title"    : "Album", "icon"     : "", "favorite" : false, "image"    : ""},
      {"id" : 6, "title"    : "Artist", "icon"     : "", "favorite" : false, "image"    : ""}
    ];
  };

  getDataForLayout2 = (): any => {
    return [
      {"id" : 1, "title"    : "Name Surname", "icon"     : "", "favorite" : false, "image"    : "assets/images/avatar/1.jpg"},
      {"id" : 2, "title"    : "Name Surname", "icon"     : "", "favorite" : false, "image"    : "assets/images/avatar/2.jpg"},
      {"id" : 3, "title"    : "Name Surname", "icon"     : "", "favorite" : false, "image"    : "assets/images/avatar/3.jpg"},
      {"id" : 4, "title"    : "Name Surname", "icon"     : "", "favorite" : false, "image"    : "assets/images/avatar/4.jpg"},
      {"id" : 5, "title"    : "Name Surname", "icon"     : "", "favorite" : false, "image"    : "assets/images/avatar/5.jpg"},
      {"id" : 6, "title"    : "Name Surname", "icon"     : "", "favorite" : false, "image"    : "assets/images/avatar/6.jpg"}
    ];
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

  getShowItemId = (item: any): string => {
    return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
  }
}
