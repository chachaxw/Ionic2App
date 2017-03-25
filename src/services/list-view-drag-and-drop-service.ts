import { IService } from './IService';
import { Toast } from 'ionic-native';

export class ListViewDragAndDropService implements IService {

    constructor() { }

    getId = (): string => 'dragAndDrop';

    getTitle = (): string => 'Drag and Drop';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Small item + header", "theme"  : "layout1"},
          {"title" : "Products + CTA header", "theme"  : "layout2"}
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
            title: 'PlaylistName',
            description: 'Author: Username',
            duration: '35:72',
            icon: 'icon-check',
            items: [
                {
                    id: 1,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/0.jpg',
                    leftIcon: 'icon-play-circle',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 2,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/1.jpg',
                    leftIcon: 'icon-play-circle',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 3,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/2.jpg',
                    leftIcon: 'icon-play-circle',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 4,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/3.jpg',
                    leftIcon: 'icon-play-circle',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 5,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/4.jpg',
                    leftIcon: 'icon-play-circle',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 6,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/5.jpg',
                    leftIcon: 'icon-play-circle',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 7,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/6.jpg',
                    leftIcon: 'icon-play-circle',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 8,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/0.jpg',
                    leftIcon: 'icon-play-circle',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 9,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/1.jpg',
                    leftIcon: 'icon-play-circle',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 10,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/2.jpg',
                    leftIcon: 'icon-play-circle',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 11,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/3.jpg',
                    leftIcon: 'icon-play-circle',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 12,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/4.jpg',
                    leftIcon: 'icon-play-circle',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 13,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/5.jpg',
                    leftIcon: 'icon-play-circle',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 14,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/6.jpg',
                    leftIcon: 'icon-play-circle',
                    rightIcon: 'icon-unfold-more'
                }
            ]
        };
    };

    getDataForLayout2 = (): any => {
        return {
            title: 'Order No. 1',
            description: 'Will be shipped: 15.5.2016.',
            buttonText: 'PROCEED',
            headerImage: 'assets/images/background/22.jpg',
            price: '$42.99',
            items: [
                {
                    id: 1,
                    title: 'Black Shirt',
                    seller: 'Seller Name',
                    image: 'assets/images/avatar/17.jpg',
                    oldPrice: '$42.99',
                    newPrice: '$35.99',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 2,
                    title: 'Black Sweater',
                    seller: 'Seller Name',
                    image: 'assets/images/avatar/18.jpg',
                    oldPrice: '$42.99',
                    newPrice: '$35.99',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 3,
                    title: 'Shirt',
                    seller: 'Seller Name',
                    image: 'assets/images/avatar/19.jpg',
                    oldPrice: '$42.99',
                    newPrice: '$35.99',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 4,
                    title: 'White Shirt',
                    seller: 'Seller Name',
                    image: 'assets/images/avatar/20.jpg',
                    oldPrice: '$42.99',
                    newPrice: '$35.99',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 5,
                    title: 'White T shirt',
                    seller: 'Seller Name',
                    image: 'assets/images/avatar/21.jpg',
                    oldPrice: '$42.99',
                    newPrice: '$35.99',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 6,
                    title: 'T shirt',
                    seller: 'Seller Name',
                    image: 'assets/images/avatar/22.jpg',
                    oldPrice: '$42.99',
                    newPrice: '$35.99',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 7,
                    title: 'Hoodies',
                    seller: 'Seller Name',
                    image: 'assets/images/avatar/23.jpg',
                    oldPrice: '$42.99',
                    newPrice: '$35.99',
                    rightIcon: 'icon-unfold-more'
                }
            ]
        };
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
            'onProceed': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Proceed");
                } else {
                    Toast.show("Proceed", '1000', 'bottom').subscribe(toast => { });
                }
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
