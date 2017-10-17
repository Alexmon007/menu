import {MenuItem} from "./MenuItem";
import {RestaurantItem} from "./RestaurantItem";
import {LineItem} from "./LineItem";
/**
 * Created by alcruz on 10/16/2017.
 */
export class SaleItem {
  public title:String;
  public restaurant:RestaurantItem;
  public items:LineItem;
  public total:Number;
}
