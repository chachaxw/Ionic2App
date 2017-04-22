import { IService } from './IService';
import { Toast } from '@ionic-native/toast';

export class ListViewGoogleCardsService implements IService {

  constructor(private toast: Toast) { }

  getId = (): string => 'googleCards';

  getTitle = (): string => 'Google Cards';

  getAllThemes = (): Array<any> => {
    return [
      {"title" : "Styled cards", "theme"  : "layout1"},
      {"title" : "Styled cards 2", "theme"  : "layout2"}
    ];
  };

  getDataForLayout1 = (): any => {
    return {
      title: 'PlaylistName',
      description: 'Author:Username',
      duration: '35:72',
      items: [
        {
          id: 1,
          title: 'Atrist Name',
          image: 'assets/images/avatar-small/0.jpg',
          description: 'Birth year: 1984',
          shortDescription: 'Country: Germany',
          longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          iconLike: 'icon-thumb-up',
          iconFavorite: 'icon-heart',
          iconShare: 'icon-share-variant'
        },
        {
          id: 2,
          title: 'Atrist Name',
          image: 'assets/images/avatar-small/1.jpg',
          description: 'Birth year: 1980',
          shortDescription: 'Country: Germany',
          longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          iconLike: 'icon-thumb-up',
          iconFavorite: 'icon-heart',
          iconShare: 'icon-share-variant'
        },
        {
          id: 3,
          title: 'Atrist Name',
          image: 'assets/images/avatar-small/2.jpg',
          description: 'Birth year: 1984',
          shortDescription: 'Country: Germany',
          longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          iconLike: 'icon-thumb-up',
          iconFavorite: 'icon-heart',
          iconShare: 'icon-share-variant'
        },
        {
          id: 4,
          title: 'Atrist Name',
          image: 'assets/images/avatar-small/3.jpg',
          description: 'Birth year: 1984',
          shortDescription: 'Country: Germany',
          longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          iconLike: 'icon-thumb-up',
          iconFavorite: 'icon-heart',
          iconShare: 'icon-share-variant'
        },
        {
          id: 5,
          title: 'Atrist Name',
          image: 'assets/images/avatar-small/4.jpg',
          description: 'Birth year: 1984',
          shortDescription: 'Country: Germany',
          longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          iconLike: 'icon-thumb-up',
          iconFavorite: 'icon-heart',
          iconShare: 'icon-share-variant'
        },
        {
          id: 6,
          title: 'Atrist Name',
          image: 'assets/images/avatar-small/5.jpg',
          description: 'Birth year: 1984',
          shortDescription: 'Country: Germany',
          longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          iconLike: 'icon-thumb-up',
          iconFavorite: 'icon-heart',
          iconShare: 'icon-share-variant'
        },
        {
          id: 7,
          title: 'Atrist Name',
          image: 'assets/images/avatar-small/6.jpg',
          description: 'Birth year: 1984',
          shortDescription: 'Country: Germany',
          longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          iconLike: 'icon-thumb-up',
          iconFavorite: 'icon-heart',
          iconShare: 'icon-share-variant'
        },
        {
          id: 8,
          title: 'Atrist Name',
          image: 'assets/images/avatar-small/7.jpg',
          description: 'Birth year: 1984',
          shortDescription: 'Country: Germany',
          longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          iconLike: 'icon-thumb-up',
          iconFavorite: 'icon-heart',
          iconShare: 'icon-share-variant'
        }
      ]
    };
  };
  getDataForLayout2 = (): any => {
    return {
      items: [
        {
          id: 1,
          title: 'Card Title 1',
          titleHeader: 'Lorem Ipsum 1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'assets/images/background/1.jpg',
          button: 'EXPLORE',
          shareButton: 'SHARE'
        },
        {
          id: 2,
          title: 'Card Title 2',
          titleHeader: 'Lorem Ipsum 2',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'assets/images/background/2.jpg',
          button: 'EXPLORE',
          shareButton: 'SHARE'
        },
        {
          id: 3,
          title: 'Card Title 3',
          titleHeader: 'Lorem Ipsum 3',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'assets/images/background/5.jpg',
          button: 'EXPLORE',
          shareButton: 'SHARE'
        },
        {
          id: 4,
          title: 'Card Title 4',
          titleHeader: 'Lorem Ipsum 4',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'assets/images/background/3.jpg',
          button: 'EXPLORE',
          shareButton: 'SHARE'
        },
        {
          id: 5,
          title: 'Card Title 5',
          titleHeader: 'Lorem Ipsum 5',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: 'assets/images/background/1.jpg',
          button: 'EXPLORE',
          shareButton: 'SHARE'
        }
      ]
    };
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
      'onItemClick': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log(item);
        } else {
          this.toast.show(item.title, '1000', 'bottom').subscribe(toast => { });
        }
      },
      'onExplore': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log("Explore");
        } else {
          this.toast.show("Explore", '1000', 'bottom').subscribe(toast => { });
        }
      },
      'onShare': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log("Share");
        } else {
          this.toast.show("Share", '1000', 'bottom').subscribe(toast => { });
        }
      },
      'onLike': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log("onLike");
        } else {
          this.toast.show("onLike", '1000', 'bottom').subscribe(toast => { });
        }
      },
      'onFavorite': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log("onFavorite");
        } else {
          this.toast.show("onFavorite", '1000', 'bottom').subscribe(toast => { });
        }
      },
      'onFab': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log("Fab");
        } else {
          this.toast.show("Fab", '1000', 'bottom').subscribe(toast => { });
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
