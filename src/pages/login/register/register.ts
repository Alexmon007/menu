/**
 * Created by alexc on 10/11/2017.
 */
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading,
  LoadingController,   AlertController} from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {CustomValidator} from "../validators/email.validator";
import {UserService} from "../../../services/user.service";
import {TabsPage} from "../../main/tabs/tabs";
import {SetCurrencyPage} from "../set-currency/set-currency";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'register',
  templateUrl: './register.html',
})
export class RegisterPage {
  public signUpForm: FormGroup;
  public loading: Loading;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public authProvider: UserService,
              public formBuilder: FormBuilder) {
    this.signUpForm = formBuilder.group({
      email: ['',
        Validators.compose([Validators.required, CustomValidator.isEmailValid])],
      password: ['',
        Validators.compose([Validators.minLength(6), Validators.required])],
      name: ['',
        Validators.compose([Validators.required])]
    });
    this.loading = loadingCtrl.create();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signUp(){
    if (!this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    } else {
      this.authProvider.signupUser(this.signUpForm.value.email,
        this.signUpForm.value.password)
        .then(authData => {
          console.log(authData);
          this.loading.dismiss().then(() => {
            this.navCtrl.push(SetCurrencyPage,{user:authData});
          });
        }, error => {
          this.loading.dismiss().then(() => {
            let alert = this.alertCtrl.create({
              message: error.message,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
            alert.present();
          })
        });
    }
  }
  // loginUser(): void {
  //   if (!this.loginForm.valid) {
  //     console.log(this.loginForm.value);
  //   } else {
  //     this.authProvider.loginUser(this.loginForm.value.email,
  //       this.loginForm.value.password)
  //       .then(authData => {
  //         this.loading.dismiss().then(() => {
  //           this.navCtrl.setRoot(TabsPage);
  //         });
  //       }, error => {
  //         this.loading.dismiss().then(() => {
  //           let alert = this.alertCtrl.create({
  //             message: error.message,
  //             buttons: [
  //               {
  //                 text: "Ok",
  //                 role: 'cancel'
  //               }
  //             ]
  //           });
  //           alert.present();
  //         })
  //       });
  //   }
  // }
  goToSignup(): void {
    // this.navCtrl.push('SignupPage');
  }

  goToResetPassword(): void {
    // this.navCtrl.push('ResetPasswordPage');
  }
}

