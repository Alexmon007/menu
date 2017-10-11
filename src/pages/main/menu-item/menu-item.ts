/**
 * Created by alexc on 10/10/2017.
 */
/**
 * Created by alexc on 10/10/2017.
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RestaurantService} from "../../../services/restaurant.service";
import {RestaurantItem} from "../../../models/RestaurantItem";
import {MenuItem} from "../../../models/MenuItem";
import {OrderLineIItem} from "../../../models/OrderLineIItem";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'menu-item',
  templateUrl:  './menu-item.html',
})
export class MenuItemPage {

  menuItem:MenuItem;
  orderLineItem:OrderLineIItem;
  constructor(public navCtrl: NavController, public navParams: NavParams,private restService:RestaurantService) {
    this.menuItem = navParams.get('menuItem');
    this.orderLineItem= new OrderLineIItem();
    this.orderLineItem.item= this.menuItem;
    console.log(this.menuItem);
  }

  ionViewDidLoad() {

  }

  addToCart(){

  }
}
