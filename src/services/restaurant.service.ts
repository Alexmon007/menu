/**
 * Created by alexc on 10/10/2017.
 */
import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database"
import {Observable} from "rxjs/Observable";
import { RestaurantItem} from "../models/RestaurantItem";
@Injectable()
export class RestaurantService {
  private restaurantsRef = '/restaurants';

  constructor(private afdatabase: AngularFireDatabase) {
  }

  public getRestaurant(refId: string): Observable<RestaurantItem> {
    return this.afdatabase.object(`${this.restaurantsRef}/${refId}`);
  }

  public getAll(): Observable<RestaurantItem[]> {
    return this.afdatabase.list(this.restaurantsRef);
  }

  public findAll(start, end): FirebaseListObservable<RestaurantItem[]> {
    return this.afdatabase.list(this.restaurantsRef, {
      query: {
        orderByChild: 'name',
        limitToFirst: 20,
        startAt: start,
        endAt: end
      }
    });

  }
}
