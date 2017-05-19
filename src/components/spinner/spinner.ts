import { Component, Input } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: 'spinner.html'
})

export class Spinner {
  @Input('data') data: any;
  path : string;

  constructor() {}

  ngAfterViewInit() {
    this.path = "assets/svg/" + this.data.icon + ".svg";
  }

  getData = ():any => {
    return this.data;
  }
}
