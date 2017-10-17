import {MenuItem} from "./MenuItem";
/**
 * Created by alexc on 10/11/2017.
 */
export class LineItem{
  public item:MenuItem;
  public quantity: Number;
  public totalPrice: Number;
  constructor(){
    this.quantity=1;
    this.totalPrice=0;
  }
}
