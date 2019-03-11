import { IService } from './IService';
import { Toast } from '@ionic-native/toast/ngx';

const toast = new Toast();

export class WizardService implements IService {

  constructor() {}

  getId = (): string => 'wizard';

  getTitle = (): string => 'Wizard';

  getAllThemes = (): Array<any> => {
    return [
      {"title" : "Simple + icon", "theme"  : "layout1"},
      {"title" : "Big image", "theme"  : "layout2"},
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
      'onFinish': function(event: any) {
        if (window.location.hostname === "localhost") {
          console.log('Finish');
        } else {
          toast.show("Finish", '1000', 'bottom').subscribe(toast => { });
        }
      }
    };
  };

  getDataForLayout1 = (): any => {
    return {
      'toolBarTitle': 'Simple + icon',
      'btnPrev': 'Previous',
      'btnNext': 'Next',
      'btnFinish': 'Finish',
      'items': [
        {
          logo: '',
          iconSlider: 'icon-star-outline',
          title: 'Fragment Example 1',
          description: 'Text for Fragment Example 1 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          buttonNext: 'Next'
        },
        {
          logo: '',
          iconSlider: 'icon-star-half',
          title: 'Fragment Example 2',
          description: 'Text for Fragment Example 2 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          buttonNext: 'Next',
          buttonPrevious: 'Previous'
        },
        {
          logo: '',
          iconSlider: 'icon-star',
          title: 'Fragment Example 3',
          description: 'Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          buttonPrevious: 'Previous',
          buttonFinish: 'Finish'
        }
      ]
    };
  };

  getDataForLayout2 = (): any => {
    return {
      'toolBarTitle': 'Big image',
      'btnNext': 'Next',
      'btnFinish': 'Finish',
      'items': [
        {
          backgroundImage: 'assets/images/avatar-large/1.jpg',
          title: 'Fragment Example 1'
        },
        {
          backgroundImage: 'assets/images/avatar-large/2.jpg',
          title: 'Fragment Example 2'
        },
        {
          backgroundImage: 'assets/images/avatar-large/3.jpg',
          title: 'Fragment Example 3'
        }
      ]
    };
  };

  getShowItemId = (item: any): string => {
    return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
  }

  prepareParams = (item: any) => {
    let result = {
      title: item.title,
      data: this.getDataForTheme(item),
      events: this.getEventsForTheme(item)
    };
    result[this.getShowItemId(item)] = true;
    return result;
  };
}
