import {MenuItem} from "./MenuItem";
/**
 * Created by alexc on 10/3/2017.
 */
export class RestaurantItem{
  public name:String;
  public restaurantType: Number;
  public allowsReservations: Boolean;
  public menu: MenuItem[];
  public description: String[];
  public address: Address;
  public reservationsSchedule:any;
}
export class Address{
  public name:String;
  public location:Location;
}
export class Location{
  public latitude:Number;
  public longitude:Number;
}


