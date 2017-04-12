import { Component, Input } from '@angular/core';

@Component({
    selector: 'login-layout-1',
    templateUrl: 'login-register-layout-1.html'
})

export class LoginLayout1 {
  @Input() data: any;
  @Input() events: any;

  public username: string;
  public password: string;

  constructor() {}

  onEvent = (event: string): void => {
    if (this.events[event]) {
      this.events[event]({
        'username' : this.username,
        'password' : this.password
      });
    }
  }
}
