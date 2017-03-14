import { Component, Input } from '@angular/core';

@Component({
    selector: 'splash-screen-layout-1',
    templateUrl: 'splash-screen.html'
})

export class SplashScreenLayout1 {
  @Input('data') data: any;
  @Input('events') events: any;

    constructor() {}

    ngAfterViewInit() {
        this.executeEvents();
    }

    getData(): any {
      return this.data;
    }

    getEvents(): any {
      return this.events;
    }

    executeEvents() : void {
      let duration = (this.getData() && this.getData().duration) ? this.getData().duration : 1000;
      var events = null;

      if (this.getEvents()) {
        events = this.getEvents()['onRedirect'];
      }

      setTimeout(function(){
        if (events) {
          events();
        }
      }, duration);
    }
}
