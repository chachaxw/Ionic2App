import { IService } from './IService';
import { Toast } from '@ionic-native/toast/ngx';

const toast = new Toast();

export class SearchBarService implements IService {

  constructor() {}

  getId = (): string => 'searchBars';

  getTitle = (): string => 'Search bars';

  getAllThemes = (): Array<any> => {
    return [
      {"title" : "Simple", "theme"  : "layout1"},
      {"title" : "Field + header", "theme"  : "layout2"}
    ];
  };

  getDataForTheme = (menuItem: any): Array<any> => {
    return this[
      'getDataFor' +
      menuItem.theme.charAt(0).toUpperCase() +
      menuItem.theme.slice(1)
    ]();
  };

  getEventsForTheme = (menuItem: any): any => {
    return {
      'onTextChange': function(text: any) {
        if (window.location.hostname === "localhost") {
          console.log(text);
        } else {
          toast.show(text, '1000', 'bottom').subscribe(toast => { });
        }
      },
      'onItemClick': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log(JSON.stringify(item));
        } else {
          toast.show(item.title, '1000', 'bottom').subscribe(toast => { });
        }
      }
    };
  };

  getDataForLayout1 = (): any => {
    return {
      toolBarTitle: 'Simple',
      items: [
        {
          title: 'Friends',
          description: '254 people',
          icon: 'icon-account-check'
        },
        {
          title: 'Enemies',
          description: '254 people',
          icon: 'icon-account-check'
        },
        {
          title: 'Neutral',
          description: '254 people',
          icon: 'icon-account-check'
        },
        {
          title: 'Family',
          description: '254 people',
          icon: 'icon-account-check'
        },
        {
          title: 'Guests',
          description: '254 people',
          icon: 'icon-account-check'
        },
        {
          title: 'Students',
          description: '254 people',
          icon: 'icon-account-check'
        },
        {
          title: 'Friends',
          description: '254 people',
          icon: 'icon-account-check'
        },
        {
          title: 'Enemies',
          description: '254 people',
          icon: 'icon-account-check'
        },
        {
          title: 'Neutral',
          description: '254 people',
          icon: 'icon-account-check'
        },
        {
          title: 'Family',
          description: '254 people',
          icon: 'icon-account-check'
        },
        {
          title: 'Guests',
          description: '254 people',
          icon: 'icon-account-check'
        },
        {
          title: 'Students',
          description: '254 people',
          icon: 'icon-account-check'
        }
      ]
    };
  };

  getDataForLayout2 = (): any => {
    return {
      toolBarTitle: 'Field + header',
      headerImage: 'assets/images/background/30.jpg',
      searchText: 'Search by',
      items: [
        {
          title: 'Song',
          icon: 'icon-music-box'
        },
        {
          title: 'Album',
          icon: 'icon-headset'
        },
        {
          title: 'Artist',
          icon: 'icon-human-child'
        },
        {
          title: 'Genre',
          icon: 'icon-menu'
        },
        {
          title: 'Song',
          icon: 'icon-music-box'
        },
        {
          title: 'Album',
          icon: 'icon-headset'
        },
        {
          title: 'Artist',
          icon: 'icon-human-child'
        },
        {
          title: 'Genre',
          icon: 'icon-menu'
        },
        {
          title: 'Album',
          icon: 'icon-headset'
        }
      ]
    };
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
