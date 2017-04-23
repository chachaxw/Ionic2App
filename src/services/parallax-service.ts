import { IService } from './IService';
import { Toast } from '@ionic-native/toast';

const toast = new Toast();

export class ParallaxService implements IService {

  constructor() { }

  getId = (): string => 'parallax';

  getTitle = (): string => 'Parallax';

  getAllThemes = (): Array<any> => {
    return [
      {"title" : "Player", "theme"  : "player"},
      {"title" : "Product", "theme"  : "product"}
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
      'onLike': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log("Like");
        } else {
          toast.show("Like", '1000', 'bottom').subscribe(toast => { });
        }
      },
      'onFavorite': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log("Favorite");
        } else {
          toast.show("Favorite", '1000', 'bottom').subscribe(toast => { });
        }
      },
      'onShare': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log("Share");
        } else {
          toast.show("Share", '1000', 'bottom').subscribe(toast => { });
        }
      },
      'onSkipPrevious': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log("Skip Previous");
        } else {
          toast.show("Skip Previous", '1000', 'bottom').subscribe(toast => { });
        }
      },
      'onPlay': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log("Play");
        } else {
          toast.show("Play", '1000', 'bottom').subscribe(toast => { });
        }
      },
      'onSkipNext': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log("Skip Next");
        } else {
          toast.show("Skip Next", '1000', 'bottom').subscribe(toast => { });
        }
      },
      'onFab': function(item: any) {
      if (window.location.hostname === "localhost") {
          console.log("Fab");
        } else {
          toast.show("Fab", '1000', 'bottom').subscribe(toast => { });
        }
      },
      'onItemClick': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log(item.title);
        } else {
          toast.show(item.title, '1000', 'bottom').subscribe(toast => { });
        }
      },
    };
  };

  getDataForPlayer = (): any => {
    return {
      headerImage: 'assets/images/background/14.jpg',
      toolBarTitle: 'Player',
      title: 'ArtistName',
      iconLike: 'icon-thumb-up',
      iconFavorite: 'icon-heart',
      iconShare: 'icon-share-variant',
      iconSkipPrevious: 'icon-skip-previous',
      iconPlay: 'icon-play',
      iconSkipNext: 'icon-skip-next',
      items: [
        {
          id: 1,
          title: 'SongName',
          description: 'ArtistName',
          image: 'assets/images/avatar/0.jpg',
          imageAlt: 'avatar',
          icon: 'icon-heart-outline',
          duration: '3:42'
        },
        {
          id: 2,
          title: 'SongName',
          description: 'ArtistName',
          image: 'assets/images/avatar/1.jpg',
          imageAlt: 'avatar',
          icon: 'icon-heart-outline',
          duration: '3:42'
        },
        {
          id: 3,
          title: 'SongName',
          description: 'ArtistName',
          image: 'assets/images/avatar/2.jpg',
          imageAlt: 'avatar',
          icon: 'icon-heart-outline',
          duration: '3:42'
        },
        {
          id: 4,
          title: 'SongName',
          description: 'ArtistName',
          image: 'assets/images/avatar/3.jpg',
          imageAlt: 'avatar',
          icon: 'icon-heart-outline',
          duration: '3:42'
        },
        {
          id: 5,
          title: 'SongName',
          description: 'ArtistName',
          image: 'assets/images/avatar/4.jpg',
          imageAlt: 'avatar',
          icon: 'icon-heart-outline',
          duration: '3:42'
        },
        {
          id: 6,
          title: 'SongName',
          description: 'ArtistName',
          image: 'assets/images/avatar/5.jpg',
          imageAlt: 'avatar',
          icon: 'icon-heart-outline',
          duration: '3:42'
        },
        {
          id: 7,
          title: 'SongName',
          description: 'ArtistName',
          image: 'assets/images/avatar/6.jpg',
          imageAlt: 'avatar',
          icon: 'icon-heart-outline',
          duration: '3:42'
        },
        {
          id: 8,
          title: 'SongName',
          description: 'ArtistName',
          image: 'assets/images/avatar/7.jpg',
          imageAlt: 'avatar',
          icon: 'icon-heart-outline',
          duration: '3:42'
        },
        {
          id: 9,
          title: 'SongName',
          description: 'ArtistName',
          image: 'assets/images/avatar/1.jpg',
          imageAlt: 'avatar',
          icon: 'icon-heart-outline',
          duration: '3:42'
        },
        {
          id: 10,
          title: 'SongName',
          description: 'ArtistName',
          image: 'assets/images/avatar/2.jpg',
          imageAlt: 'avatar',
          icon: 'icon-heart-outline',
          duration: '3:42'
        },
        {
          id: 11,
          title: 'SongName',
          description: 'ArtistName',
          image: 'assets/images/avatar/0.jpg',
          imageAlt: 'avatar',
          icon: 'icon-heart-outline',
          duration: '3:42'
        },
        {
          id: 12,
          title: 'SongName',
          description: 'ArtistName',
          image: 'assets/images/avatar/3.jpg',
          imageAlt: 'avatar',
          icon: 'icon-heart-outline',
          duration: '3:42'
        }
      ]
    };
  };

  getDataForProduct = (): any => {
    return {
      headerImage: 'assets/images/background/7.jpg',
      toolBarTitle: 'Product',
      title: 'Super discount',
      description: '50% OFF',
      iconLike: 'icon-thumb-up',
      iconFavorite: 'icon-heart',
      iconShare: 'icon-share-variant',
      items: [
        {
          id: 1,
          title: 'Black Shirt',
          image: 'assets/images/avatar/0.jpg',
          description: 'Duis aute irure dolor in reprehenderit',
          oldPrice: '$42.99',
          newPrice: '$35.99'
        },
        {
          id: 2,
          title: 'Black Sweater',
          image: 'assets/images/avatar/1.jpg',
          description: 'Duis aute irure dolor in reprehenderit',
          oldPrice: '$42.99',
          newPrice: '$35.99'
        },
        {
          id: 3,
          title: 'Shirt',
          image: 'assets/images/avatar/2.jpg',
          description: 'Duis aute irure dolor in reprehenderit',
          oldPrice: '$42.99',
          newPrice: '$35.99'
        },
        {
          id: 4,
          title: 'White Shirt',
          image: 'assets/images/avatar/3.jpg',
          description: 'Duis aute irure dolor in reprehenderit',
          oldPrice: '$42.99',
          newPrice: '$35.99'
        },
        {
          id: 5,
          title: 'White T Shirt',
          image: 'assets/images/avatar/4.jpg',
          description: 'Duis aute irure dolor in reprehenderit',
          oldPrice: '$42.99',
          newPrice: '$35.99'
        },
        {
          id: 6,
          title: 'Hoodies',
          image: 'assets/images/avatar/5.jpg',
          description: 'Duis aute irure dolor in reprehenderit',
          oldPrice: '$42.99',
          newPrice: '$35.99'
        },
        {
          id: 7,
          title: 'Black Shirt',
          image: 'assets/images/avatar/0.jpg',
          description: 'Duis aute irure dolor in reprehenderit',
          oldPrice: '$42.99',
          newPrice: '$35.99'
        },
        {
          id: 8,
          title: 'Black Sweater',
          image: 'assets/images/avatar/1.jpg',
          description: 'Duis aute irure dolor in reprehenderit',
          oldPrice: '$42.99',
          newPrice: '$35.99'
        },
        {
          id: 9,
          title: 'Shirt',
          image: 'assets/images/avatar/2.jpg',
          description: 'Duis aute irure dolor in reprehenderit',
          oldPrice: '$42.99',
          newPrice: '$35.99'
        },
        {
          id: 10,
          title: 'White Shirt',
          image: 'assets/images/avatar/3.jpg',
          description: 'Duis aute irure dolor in reprehenderit',
          oldPrice: '$42.99',
          newPrice: '$35.99'
        },
        {
          id: 11,
          title: 'White T Shirt',
          image: 'assets/images/avatar/4.jpg',
          description: 'Duis aute irure dolor in reprehenderit',
          oldPrice: '$42.99',
          newPrice: '$35.99'
        },
        {
          id: 12,
          title: 'Hoodies',
          image: 'assets/images/avatar/5.jpg',
          description: 'Duis aute irure dolor in reprehenderit',
          oldPrice: '$42.99',
          newPrice: '$35.99'
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
