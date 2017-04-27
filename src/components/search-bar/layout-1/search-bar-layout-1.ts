import {Component, Input} from '@angular/core';

@Component({
    selector: 'search-bar-layout-1',
    templateUrl: 'search-bar.html'
})

export class SearchBarLayout1 {
  @Input() data: any;
  @Input() events: any;

  searchTerm:any="";
  allItems:any;

  constructor() {}

  getItems(event: any):void {
    if (!this.allItems) {
      this.allItems = this.data.items;
    }
    this.data.items = this.allItems.filter((item) => {
        return item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  onEvent(event:string, item:any) {//ITEM [EVENT OR SELECTED ITEM]
    if (this.events[event]) {
      if ('onTextChange' === event) {
        this.getItems(item);
        this.events[event](this.searchTerm);
      } else {
        this.events[event](item);
      }
    }
    console.log(event);
  }
}
