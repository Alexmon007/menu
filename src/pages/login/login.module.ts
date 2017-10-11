import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login/login';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule,
    // IonicPageModule.forChild(LoginPage),
    FormsModule
  ],
  entryComponents: [
    LoginPage
  ]
})
export class LoginPageModule {}
