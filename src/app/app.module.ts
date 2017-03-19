import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { HomePage } from '../pages/home/home';
import { ItemsPage } from '../pages/items/items';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ItemDetailsPageSplashScreen } from '../pages/item-details-splash-screen/item-details-splash-screen';
import { ItemDetailsPageAppearanceAnimation } from '../pages/item-details-appearance-animation/item-details-appearance-animation';

// Components
import { SplashScreenLayout1 } from '../components/splash-screen/layout-1/splash-screen-layout-1';
import { SplashScreenLayout2 } from '../components/splash-screen/layout-2/splash-screen-layout-2';
import { SplashScreenLayout3 } from '../components/splash-screen/layout-3/splash-screen-layout-3';
import { AppearanceAnimationLayout1 } from '../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1';
import { AppearanceAnimationLayout2 } from '../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemsPage,
    ItemDetailsPage,
    ItemDetailsPageSplashScreen,
    SplashScreenLayout1,
    SplashScreenLayout2,
    SplashScreenLayout3,
    ItemDetailsPageAppearanceAnimation,
    AppearanceAnimationLayout1,
    AppearanceAnimationLayout2,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemsPage,
    ItemDetailsPage,
    ItemDetailsPageSplashScreen,
    SplashScreenLayout1,
    SplashScreenLayout2,
    SplashScreenLayout3,
    ItemDetailsPageAppearanceAnimation,
    AppearanceAnimationLayout1,
    AppearanceAnimationLayout2,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
