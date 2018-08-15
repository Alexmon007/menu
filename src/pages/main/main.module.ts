/**
 * Created by alexc on 10/3/2017.
 */
import { NgModule } from '@angular/core';
import { AboutPage } from './about/about';
import { ContactPage } from './contact/contact';
import { HomePage } from './home/home';
import { TabsPage } from './tabs/tabs';
import { SearchPage} from './search/search';
import {IonicPageModule} from "ionic-angular";
import {RestaurantPage} from "./restaurant/restaurant";
import {MenuItemPage} from "./menu-item/menu-item";
import {FormsModule} from "@angular/forms";
import {SalePage} from "./sale/sale";
import {CartPage} from "./cart/cart";
import {ProfilePage} from "./profile/profile";

@NgModule({
  declarations: [
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchPage,
    RestaurantPage,
    MenuItemPage,
    SalePage,
    CartPage,
    ProfilePage
  ],
  imports: [
    IonicPageModule,
    FormsModule
  ],
  entryComponents: [
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchPage,
    RestaurantPage,
    MenuItemPage,
    SalePage,
    CartPage,
    ProfilePage
  ],
})
export class MainModule {}
