import { IService } from './IService';
import { Toast } from 'ionic-native';

export class ListViewAppearanceAnimationService implements IService {

    constructor() { }

    getId = (): string => 'appearanceAnimations';

    getTitle = (): string => 'Appearance animations';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Fade in left", "theme"  : "layout1"},
          {"title" : "Fade in right", "theme"  : "layout2"},
          {"title" : "Fade in down", "theme"  : "layout3"},
          {"title" : "Fade in", "theme"  : "layout4"},
          {"title" : "Zoom in", "theme"  : "layout5"}
        ];
    };

    getDataForTheme = (menuItem: any): any => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    getAnimationData = (): any => {
      return {
          items: [
              {
                  id: 1,
                  title: 'Isaac Raid',
                  image: 'assets/images/avatar/0.jpg',
                  favorite: true
              },
              {
                  id: 2,
                  title: 'Jason Graham',
                  image: 'assets/images/avatar/1.jpg',
                  favorite: false
              },
              {
                  id: 3,
                  title: 'Abigail Ross',
                  image: 'assets/images/avatar/2.jpg',
                  favorite: true
              },
              {
                  id: 4,
                  title: 'Justin Rutherford',
                  image: 'assets/images/avatar/3.jpg',
                  favorite: false
              },
              {
                  id: 5,
                  title: 'Nicholas Henderson',
                  image: 'assets/images/avatar/4.jpg',
                  favorite: false
              },
              {
                  id: 6,
                  title: 'Elizabeth Mackenzie',
                  image: 'assets/images/avatar/5.jpg',
                  favorite: true
              },
              {
                  id: 7,
                  title: 'Melanie Ferguson',
                  image: 'assets/images/avatar/6.jpg',
                  favorite: false
              },
              {
                  id: 8,
                  title: 'Fiona Kelly',
                  image: 'assets/images/avatar/7.jpg',
                  favorite: true
              },
              {
                  id: 9,
                  title: 'Nicholas King',
                  image: 'assets/images/avatar/8.jpg',
                  favorite: true
              },
              {
                  id: 10,
                  title: 'Victoria Mitchell',
                  image: 'assets/images/avatar/9.jpg',
                  favorite: true
              },
              {
                  id: 11,
                  title: 'Sophie Lyman',
                  image: 'assets/images/avatar/10.jpg',
                  favorite: false
              },
              {
                  id: 12,
                  title: 'Carl Ince',
                  image: 'assets/images/avatar/11.jpg',
                  favorite: false
              },
              {
                  id: 13,
                  title: 'Michelle Slater',
                  image: 'assets/images/avatar/12.jpg',
                  favorite: false
              },
              {
                  id: 14,
                  title: 'Ryan Mathis',
                  image: 'assets/images/avatar/13.jpg',
                  favorite: false
              },
              {
                  id: 15,
                  title: 'Julia Grant',
                  image: 'assets/images/avatar/14.jpg',
                  favorite: false
              },
              {
                  id: 16,
                  title: 'Hannah Martin',
                  image: 'assets/images/avatar/15.jpg',
                  favorite: false
              }
          ]
      };
    };

    getDataForLayout1 = (): any => {
      return this.getAnimationData();
    };

    getDataForLayout2 = (): any => {
      return this.getAnimationData();
    };

    getDataForLayout3 = (): any => {
      return this.getAnimationData();
    };

    getDataForLayout4 = (): any => {
      return this.getAnimationData();
    };

    getDataForLayout5 = (): any => {
      return this.getAnimationData();
    };

    getDataForLayout6 = (): any => {
      return this.getAnimationData();
    };

    getDataForLayout7 = (): any => {
      return this.getAnimationData();
    };

    getEventsForTheme = (menuItem: any): any => {
        return {
            'onItemClick': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log(item);
                } else {
                    Toast.show(item.title, '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onFavorite': function(item) {
                item.favorite = !item.favorite;
            },
            'onFab': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Fab");
                } else {
                    Toast.show("Fab", '1000', 'bottom').subscribe(toast => { });
                }
            },
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
