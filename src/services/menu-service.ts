import { IService } from './IService';

export class MenuService implements IService {
  constructor() {}

  getAllThemes = (): Array<any> => {
    return [
      {"title" : "List Views", "theme"  : "listViews",  "icon" : "icon-format-align-justify", "listView" : true, "component": ""},
    ];
  }

  getTitle = (): string => "UIAppTemplate";

  getId = (): string => "menu";

  getDataForTheme = (menuItem: any): Array<any> => {
    return [];
  }

  getEventsForTheme = (menuItem: any): any => {
    return {};
  }

  prepareParams = (item: any) => {
    return {
      title: item.title,
      data: this.getDataForTheme(item),
      events: this.getEventsForTheme(item)
    };
  }

}
