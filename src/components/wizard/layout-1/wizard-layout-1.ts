import { Component, Input } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'wizard-layout-1',
  templateUrl: 'wizard.html'
})

export class WizardLayout1 {
  @Input() data: any;
  @Input() events: any;
  @ViewChild('wizardSlider') slider: Slides;
  sliderOptions = { pager: true };

  constructor() { }

  changeSlide(index: number): void {
    if (index > 0) {
      this.slider.slideNext(300);
    } else {
      this.slider.slidePrev(300);
    }
  }

  slideHasChanged(index: number): void {
    console.log(this.slider.getActiveIndex());
  }

  show(value: string): boolean {
    let result: boolean = false;
    try {
      if (value == 'prev') {
        result = !this.slider.isBeginning();
      } else if (value == 'next') {
        result = this.slider.getActiveIndex() < (this.slider.length() - 1);
      } else if (value == 'finish') {
        result = this.slider.isEnd();
      }
    } catch (e) { }
    return result;
  }

  onEvent(event: string) {
    if (this.events[event]) {
      this.events[event]();
    }
    console.log(event);
  }
}
