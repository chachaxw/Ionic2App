import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItemsPage } from '../pages/items/items';
import { ItemDetailsPage } from '../pages/item-details/item-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemsPage,
    ItemDetailsPage,
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
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
