/**
 * Created by alexc on 10/10/2017.
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RestaurantService} from "../../../services/restaurant.service";
import {RestaurantItem} from "../../../models/RestaurantItem";
import {MenuItemPage} from "../menu-item/menu-item";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-restaurant',
  templateUrl:  './restaurant.html',
  // styleUrls:['./restaurant.scss'],
})
export class RestaurantPage {

  restaurant:RestaurantItem;
  constructor(public navCtrl: NavController, public navParams: NavParams,private restService:RestaurantService) {
    this.restaurant = navParams.get('rest');
  }

  ionViewDidLoad() {

  }
  goToMenuItemDetails(item:any)
  {
    this.navCtrl.push(MenuItemPage,{ menuItem:item});
  }
}
