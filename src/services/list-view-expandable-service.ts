import { IService } from './IService';
import { Toast } from 'ionic-native';

export class ListViewExpandableService implements IService {

    constructor() { }

    getId = (): string => 'expandable';

    getTitle = (): string => 'Expandable';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "List big image", "theme"  : "layout1"},
          {"title" : "Full image with CTA", "theme"  : "layout2"}
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
            items: [
                {
                    id: 1,
                    title: 'Artist1',
                    description: 'SINGER',
                    image: 'assets/images/avatar/15.jpg',
                    iconLike: 'icon-thumb-up',
                    iconFavorite: 'icon-heart',
                    iconShare: 'icon-share-variant',
                    items: [
                        {
                            id: 1,
                            title: 'AlbumName',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/10.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 2,
                            title: 'AlbumName',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/11.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 3,
                            title: 'AlbumName',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/12.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 4,
                            title: 'AlbumName',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/13.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'Artist2',
                    description: 'BASSO',
                    image: 'assets/images/avatar/2.jpg',
                    iconLike: 'icon-thumb-up',
                    iconFavorite: 'icon-heart',
                    iconShare: 'icon-share-variant',
                    items: [
                        {
                            id: 1,
                            title: 'AlbumName1',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/14.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 2,
                            title: 'AlbumName2',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/15.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 3,
                            title: 'AlbumName3',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/14.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 4,
                            title: 'AlbumName4',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/13.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 5,
                            title: 'AlbumName5',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/12.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 6,
                            title: 'AlbumName6',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/11.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'Artist3',
                    description: 'GUITARIST',
                    image: 'assets/images/avatar/3.jpg',
                    iconLike: 'icon-thumb-up',
                    iconFavorite: 'icon-heart',
                    iconShare: 'icon-share-variant',
                    items: [
                        {
                            id: 1,
                            title: 'AlbumName1',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/11.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 2,
                            title: 'AlbumName2',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/12.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 3,
                            title: 'AlbumName3',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/13.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 4,
                            title: 'AlbumName4',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/14.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 5,
                            title: 'AlbumName5',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/15.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        }
                    ]
                },
                {
                    id: 4,
                    title: 'Artist4',
                    description: 'SINGER',
                    image: 'assets/images/avatar/4.jpg',
                    iconLike: 'icon-thumb-up',
                    iconFavorite: 'icon-heart',
                    iconShare: 'icon-share-variant',
                    items: [
                        {
                            id: 1,
                            title: 'AlbumName1',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/0.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 2,
                            title: 'AlbumName2',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/1.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 3,
                            title: 'AlbumName3',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/2.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 4,
                            title: 'AlbumName4',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/3.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        }
                    ]
                },
                {
                    id: 5,
                    title: 'Artist5',
                    description: 'DRUMMER',
                    image: 'assets/images/avatar/5.jpg',
                    iconLike: 'icon-thumb-up',
                    iconFavorite: 'icon-heart',
                    iconShare: 'icon-share-variant',
                    items: [
                        {
                            id: 1,
                            title: 'AlbumName1',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/14.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 2,
                            title: 'AlbumName2',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/15.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 3,
                            title: 'AlbumName3',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/6.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 4,
                            title: 'AlbumName4',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/7.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        }
                    ]
                },
                {
                    id: 6,
                    title: 'Artist5',
                    description: 'DRUMMER',
                    image: 'assets/images/avatar/3.jpg',
                    iconLike: 'icon-thumb-up',
                    iconFavorite: 'icon-heart',
                    iconShare: 'icon-share-variant',
                    items: [
                        {
                            id: 1,
                            title: 'AlbumName1',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/14.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 2,
                            title: 'AlbumName2',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/15.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 3,
                            title: 'AlbumName3',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/6.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 4,
                            title: 'AlbumName4',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/7.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        }
                    ]
                },
                {
                    id: 7,
                    title: 'Artist5',
                    description: 'DRUMMER',
                    image: 'assets/images/avatar/4.jpg',
                    iconLike: 'icon-thumb-up',
                    iconFavorite: 'icon-heart',
                    iconShare: 'icon-share-variant',
                    items: [
                        {
                            id: 1,
                            title: 'AlbumName1',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/14.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 2,
                            title: 'AlbumName2',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/15.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 3,
                            title: 'AlbumName3',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/6.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        },
                        {
                            id: 4,
                            title: 'AlbumName4',
                            description: 'Universal, 2016',
                            image: 'assets/images/avatar/7.jpg',
                            iconPlay: 'icon-play-circle-outline'
                        }
                    ]
                }
            ]
        };
    };

    getDataForLayout2 = (): any => {
        return {
            items: [
                {
                    id: 1,
                    title: 'Product 1',
                    backgroundImage: 'assets/images/background/22.jpg',
                    button: 'BUY',
                    items: [
                        'PAY WITH PAYPAL',
                        'PAY WITH VISA CARD',
                        'PAY WITH MAESTRO CARD'
                    ]
                },
                {
                    id: 2,
                    title: 'Product 2',
                    backgroundImage: 'assets/images/background/23.jpg',
                    button: 'BUY',
                    items: [
                        'PAY WITH PAYPAL',
                        'PAY WITH VISA CARD',
                        'PAY WITH MAESTRO CARD'
                    ]
                },
                {
                    id: 3,
                    title: 'Product 3',
                    backgroundImage: 'assets/images/background/24.jpg',
                    button: 'BUY',
                    items: [
                        'PAY WITH PAYPAL',
                        'PAY WITH VISA CARD',
                        'PAY WITH MAESTRO CARD'
                    ]
                },
                {
                    id: 4,
                    title: 'Product 4',
                    backgroundImage: 'assets/images/background/25.jpg',
                    button: 'BUY',
                    items: [
                        'PAY WITH PAYPAL',
                        'PAY WITH VISA CARD',
                        'PAY WITH MAESTRO CARD'
                    ]
                },
                {
                    id: 5,
                    title: 'Product 5',
                    backgroundImage: 'assets/images/background/26.jpg',
                    button: 'BUY',
                    items: [
                        'PAY WITH PAYPAL',
                        'PAY WITH VISA CARD',
                        'PAY WITH MAESTRO CARD'
                    ]
                },
                {
                    id: 6,
                    title: 'Product 5',
                    backgroundImage: 'assets/images/background/27.jpg',
                    button: 'BUY',
                    items: [
                        'PAY WITH PAYPAL',
                        'PAY WITH VISA CARD',
                        'PAY WITH MAESTRO CARD'
                    ]
                },
                {
                    id: 7,
                    title: 'Product 5',
                    backgroundImage: 'assets/images/background/28.jpg',
                    button: 'BUY',
                    items: [
                        'PAY WITH PAYPAL',
                        'PAY WITH VISA CARD',
                        'PAY WITH MAESTRO CARD'
                    ]
                }
            ]
        }
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
            'onLike': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Like");
                } else {
                    Toast.show("Like", '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onFavorite': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Favorite");
                } else {
                    Toast.show("Favorite", '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onShare': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Share");
                } else {
                    Toast.show("Share", '1000', 'bottom').subscribe(toast => { });
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
