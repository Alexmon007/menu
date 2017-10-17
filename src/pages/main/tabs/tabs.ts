import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { SearchPage } from '../search/search';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {SalePage} from "../sale/sale";
import {CartPage} from "../cart/cart";

@Component({
  templateUrl:  './tabs.html'
})
export class TabsPage {

  tabSaleRoot = SalePage;
  tabCartRoot = CartPage;
  tab3Root = ContactPage;
  tabSearchRoot = SearchPage;

  constructor() {

  }
}
