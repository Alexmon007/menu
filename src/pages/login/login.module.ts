import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login/login';
import {FormsModule} from '@angular/forms'
import {RegisterPage} from "./register/register";
import {SetCurrencyPage} from "./set-currency/set-currency";
import {EnumKeysPipe} from "./pipes/enum-keys.pipe";

@NgModule({
  declarations: [
    LoginPage,
    RegisterPage,
    SetCurrencyPage,
    EnumKeysPipe
  ],
  imports: [
    IonicPageModule,
    // IonicPageModule.forChild(LoginPage),
    FormsModule
  ],
  entryComponents: [
    LoginPage,
    RegisterPage,
    SetCurrencyPage
  ]
})
export class LoginPageModule {}
