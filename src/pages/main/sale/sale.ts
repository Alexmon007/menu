/**
 * Created by alexc on 10/10/2017.
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RestaurantService} from "../../../services/restaurant.service";
import {RestaurantItem} from "../../../models/RestaurantItem";
import {MenuItemPage} from "../menu-item/menu-item";
import {SaleItem} from "../../../models/SaleItem";
import {SalesService} from "../../../services/sales.service";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sale',
  templateUrl:  './sale.html',
  // styleUrls:['./sale.scss'],
})
export class SalePage {
  sales:SaleItem[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private saleService:SalesService) {
    this.saleService.getAll().subscribe(sales=>{
      if(sales){
        this.sales=sales;
      }
    });
  }

  ionViewDidLoad() {

  }
}
