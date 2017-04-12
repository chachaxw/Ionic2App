import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { HomePage } from '../pages/home/home';
import { ItemsPage } from '../pages/items/items';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ItemDetailsPageSplashScreen } from '../pages/item-details-splash-screen/item-details-splash-screen';
import { ItemDetailsPageAppearanceAnimation } from '../pages/item-details-appearance-animation/item-details-appearance-animation';
import { ItemDetailsPageDragAndDrop } from '../pages/item-details-drag-and-drop/item-details-drag-and-drop';
import { ItemDetailsPageExpandable } from '../pages/item-details-expandable/item-details-expandable';
import { ItemDetailsPageGoogleCard } from '../pages/item-details-google-card/item-details-google-card';
import { ItemDetailsPageSwipeToDismiss } from '../pages/item-details-swipe-to-dismiss/item-details-swipe-to-dismiss';
import { ItemDetailsPageParallax } from '../pages/item-details-parallax/item-details-parallax';
import { ItemDetailsPageLoginAndRegister } from '../pages/item-details-login-register/item-details-login-register';

// Components
import { SplashScreenLayout1 } from '../components/splash-screen/layout-1/splash-screen-layout-1';
import { SplashScreenLayout2 } from '../components/splash-screen/layout-2/splash-screen-layout-2';
import { SplashScreenLayout3 } from '../components/splash-screen/layout-3/splash-screen-layout-3';
import { AppearanceAnimationLayout1 } from '../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1';
import { AppearanceAnimationLayout2 } from '../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2';
import { AppearanceAnimationLayout3 } from '../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3';
import { AppearanceAnimationLayout4 } from '../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4';
import { AppearanceAnimationLayout5 } from '../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5';
import { DragAndDropLayout1 } from '../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1';
import { DragAndDropLayout2 } from '../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2';
import { ExpandableLayout1 } from '../components/list-view/expandable/layout-1/expandable-layout-1';
import { ExpandableLayout2 } from '../components/list-view/expandable/layout-2/expandable-layout-2';
import { GoogleCardLayout1 } from '../components/list-view/google-card/layout-1/google-card-layout-1';
import { GoogleCardLayout2 } from '../components/list-view/google-card/layout-2/google-card-layout-2';
import { SwipeToDismissLayout1 } from '../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1';
import { SwipeToDismissLayout2 } from '../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2';
import { ParallaxLayout1 } from '../components/parallax/layout-1/parallax-layout-1';
import { ParallaxLayout2 } from '../components/parallax/layout-2/parallax-layout-2';
import { LoginLayout1 } from '../components/login-register/login-layout-1/login-register-layout-1';

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
    AppearanceAnimationLayout3,
    AppearanceAnimationLayout4,
    AppearanceAnimationLayout5,
    ItemDetailsPageDragAndDrop,
    DragAndDropLayout1,
    DragAndDropLayout2,
    ItemDetailsPageExpandable,
    ExpandableLayout1,
    ExpandableLayout2,
    ItemDetailsPageGoogleCard,
    GoogleCardLayout1,
    GoogleCardLayout2,
    ItemDetailsPageSwipeToDismiss,
    SwipeToDismissLayout1,
    SwipeToDismissLayout2,
    ItemDetailsPageParallax,
    ParallaxLayout1,
    ParallaxLayout2,
    ItemDetailsPageLoginAndRegister,
    LoginLayout1,
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
    AppearanceAnimationLayout3,
    AppearanceAnimationLayout4,
    AppearanceAnimationLayout5,
    ItemDetailsPageDragAndDrop,
    DragAndDropLayout1,
    DragAndDropLayout2,
    ItemDetailsPageExpandable,
    ExpandableLayout1,
    ExpandableLayout2,
    ItemDetailsPageGoogleCard,
    GoogleCardLayout1,
    GoogleCardLayout2,
    ItemDetailsPageSwipeToDismiss,
    SwipeToDismissLayout1,
    SwipeToDismissLayout2,
    ItemDetailsPageParallax,
    ParallaxLayout1,
    ParallaxLayout2,
    ItemDetailsPageLoginAndRegister,
    LoginLayout1,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    // ElasticHeader
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
