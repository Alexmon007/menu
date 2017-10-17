/**
 * Created by alexc on 10/11/2017.
 */
/**
 * Created by alexc on 10/11/2017.
 */
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading,
  LoadingController,   AlertController} from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {CustomValidator} from "../validators/email.validator";
import {UserService} from "../../../services/user.service";
import {Currency, Language, User} from "../../../models/User";
import {FirebaseObjectObservable} from "angularfire2/database";
import {SearchPage} from "../../main/search/search";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'set-currency',
  templateUrl: './set-currency.html',
})
export class SetCurrencyPage {
  public setOptionsForm: FormGroup;
  public loading: Loading;
  public ObsevableUser:FirebaseObjectObservable<User>;
  public user:User = new User('1@1.com');
  public uid:string;
  public currencyTypes= Currency;
  public languageTypes= Language;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public authProvider: UserService,
              public formBuilder: FormBuilder,
              public navParams: NavParams) {
    this.ObsevableUser = navParams.get('user');
    this.ObsevableUser.subscribe(user=>{
      // if(user && user.$key){
      //   console.log(user);
      //   this.user=user;
      //   this.uid=user.$key;
      //   console.log(user,this.user,this.uid);
      // }
    });
  }
  goToMain(){
    this.navCtrl.push(SearchPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}

