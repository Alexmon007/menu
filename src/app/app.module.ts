import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth'
import {LoginPageModule} from '../pages/login/login.module';

import {UserService} from '../services/user.service';
import {MainModule} from "../pages/main/main.module";
import {RestaurantService} from "../services/restaurant.service";
import {AngularFireDatabaseModule} from "angularfire2/database";


let config = {
  apiKey: "AIzaSyAByeMxPEb4IDycbbRD1npMn-Rb4DrxCRI",
  authDomain: "menu-32946.firebaseapp.com",
  databaseURL: "https://menu-32946.firebaseio.com",
  projectId: "menu-32946",
  storageBucket: "menu-32946.appspot.com",
  messagingSenderId: "166519497518"
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MainModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    RestaurantService
  ]
})
export class AppModule {}
