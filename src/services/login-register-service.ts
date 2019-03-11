import { IService } from './IService';
import { Toast } from '@ionic-native/toast/ngx';

const toast = new Toast();

export class LoginRegisterService implements IService {

  constructor() { }

  getId = (): string => 'loginPages';

  getTitle = (): string => 'Login pages';

  getAllThemes = (): Array<any> => {
    return [
      {"title" : "Login + logo", "theme"  : "loginLayout1"},
      {"title" : "Register + logo", "theme"  : "registerLayout2"}
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
      onLogin: function(params) {
        if (window.location.hostname === "localhost") {
          console.log('onLogin:' + JSON.stringify(params));
        } else {
          toast.show('onLogin:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
        }
      },
      onRegister: function(params) {
        if (window.location.hostname === "localhost") {
          console.log('onRegister:' + JSON.stringify(params));
        } else {
          toast.show('onRegister:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
        }
      },
      onSkip: function(params) {
        if (window.location.hostname === "localhost") {
          console.log('onSkip:' + JSON.stringify(params));
        } else {
          toast.show('onSkip:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
        }
      },
      onFacebook: function(params) {
        if (window.location.hostname === "localhost") {
          console.log('onFacebook:' + JSON.stringify(params));
        } else {
          toast.show('onFacebook:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
        }
      },
      onTwitter: function(params) {
        if (window.location.hostname === "localhost") {
          console.log('onTwitter:' + JSON.stringify(params));
        } else {
          toast.show('onTwitter:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
        }
      },
      onGoogle: function(params) {
        if (window.location.hostname === "localhost") {
          console.log('onGoogle:' + JSON.stringify(params));
        } else {
          toast.show('onGoogle:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
        }
      },
      onPinterest: function(params) {
        if (window.location.hostname === "localhost") {
          console.log('onPinterest:' + JSON.stringify(params));
        } else {
          toast.show('onPinterest:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
        }
      },
    };
  };

  getDataForLoginLayout1 = (): any => {
    return {
      "username"        : "Username",
      "password"        : "Password",
      "register"        : "Register",
      "login"           : "Login",
      "skip"            : "Skip",
      "logo"            : "assets/images/logo/login.png",
      "backgroundImage" : "icon-account",
      "iconAccount"     : "icon-key",
      "iconKey"         : "",
      "iconLock"        : "assets/images/background/loginlight.jpg"
    };
  };
  getDataForRegisterLayout2 = (): any => {
    return {
       "backgroundImage"     : "assets/images/background/registertravel.jpg",
       "logo"                : "assets/images/logo/login.png",
       "register"            : "Register",
       "iconAccount"         : "icon-account",
       "iconAccountMultiple" : "icon-account-multiple",
       "iconHome"            : "icon-home-variant",
       "iconCity"            : "icon-city",
       "iconWeb"             : "icon-web",
       "button"              : "submit",
       "username"            : "Username",
       "password"            : "Password",
       "address"             : "Address",
       "city"                : "City",
       "state"               : "State",
       "country"             : "Country",
       "skip"                : "Skip",
       "iconLock"            : "icon-lock",
       "iconEmail"           : "icon-email-outline",
       "iconFlag"            : "icon-flag-outline-variant",
       "email"               : "Email"
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
