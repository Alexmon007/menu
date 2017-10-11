import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RestaurantService} from "../../../services/restaurant.service";
import {observableToBeFn} from "rxjs/testing/TestScheduler";
import {Observable} from "rxjs/Observable";
import {RestaurantItem} from "../../../models/RestaurantItem";
import {Subject} from "rxjs/Subject";
import {RestaurantPage} from "../restaurant/restaurant";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl:  './search.html',
})
export class SearchPage {
  startWith = new Subject();
  endWith = new Subject();
  restaurants:Observable<RestaurantItem[]>;
  filteredRestaurants:RestaurantItem[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private restService:RestaurantService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage')
    this.startWith.next('')
    this.endWith.next('' + '\uf8ff')
    console.log(this.filteredRestaurants);
    this.restService.findAll(this.startWith,this.endWith).subscribe(items=>{
      if(items){
        this.filteredRestaurants=items;
        console.log(items);
      }else{
        this.startWith.next('')
        this.endWith.next('' + '\uf8ff')
      }
    });

  }
  search($event) {
    const queryText = $event.target.value
    this.startWith.next(queryText)
    this.endWith.next(queryText + '\uf8ff')
  }

  goToRestaurantDetails(item:any){
    this.navCtrl.push(RestaurantPage,{rest:item});
  }

}
