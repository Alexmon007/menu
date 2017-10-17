/**
 * Created by alcruz on 10/16/2017.
 */
/**
 * Created by alexc on 10/10/2017.
 */
import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database"
import {Observable} from "rxjs/Observable";
import { RestaurantItem} from "../models/RestaurantItem";
import {SaleItem} from "../models/SaleItem";
@Injectable()
export class SalesService {
  private salesRef = '/sales';

  constructor(private afdatabase: AngularFireDatabase) {
  }

  public getSale(refId: string): Observable<RestaurantItem> {
    return this.afdatabase.object(`${this.salesRef}/${refId}`);
  }

  public getAll(): Observable<SaleItem[]> {
    return this.afdatabase.list(this.salesRef);
  }

  public findAll(start, end): FirebaseListObservable<RestaurantItem[]> {
    return this.afdatabase.list(this.salesRef, {
      query: {
        orderByChild: 'name',
        limitToFirst: 20,
        startAt: start,
        endAt: end
      }
    });

  }
}
