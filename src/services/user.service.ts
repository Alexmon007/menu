/**
 * Created by alexc on 10/3/2017.
 */
import {Injectable} from '@angular/core';
import firebase from 'firebase';
import {AngularFireDatabase} from 'angularfire2/database'
import {User} from "../models/User";

@Injectable()
export class UserService {
  private userRef = '/userProfile';
  constructor(private afDb:AngularFireDatabase) {
  }

  loginUser(email: string, password: string): firebase.Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string): firebase.Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(newUser => {
        let user= new User(newUser.email);
        return this.afDb.object(`${this.userRef}/${newUser.uid}`).set(user).then(()=>{
          return this.afDb.object(`${this.userRef}/${newUser.uid}`);
        });
      });
  }
  resetPassword(email: string): firebase.Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }
  logoutUser(): firebase.Promise<void> {
  return firebase.auth().signOut();
  }
}
