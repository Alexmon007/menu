import {CartItem} from "./CartItem";
/**
 * Created by alcruz on 10/11/2017.
 */
export class User{
 public email:String;
 public language:Language;
 public currency: Currency;
 public cart:CartItem;
  constructor(email:String){
    this.email=email;
    this.currency=Currency.US;
    this.language=Language.En;
  }
}

export enum Language {
  Es=0,
  En=1,
  Fr=2
}
export enum Currency {
  US=0,
  MX=1,
  EU=3
}
