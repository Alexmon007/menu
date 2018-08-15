/**
 * Created by alcruz on 10/16/2017.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserService} from "../../../services/user.service";
import {CartItem} from "../../../models/CartItem";

@Component({
  selector: 'page-cart',
  templateUrl:  './cart.html'
})
export class CartPage {
  cart:CartItem;
  constructor(public navCtrl: NavController, private userService:UserService) {
  this.userService.getCurrentCart().subscribe(snapshot=> {
    if(snapshot){
      this.cart=snapshot.cart;
      console.log(this.cart);
    }
  })
  }

}
