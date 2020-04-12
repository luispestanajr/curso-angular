import { Restaurant } from './restaurant/restaurant.model';
import { MEAT_API } from '../app.api';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantsService {
    constructor(private http: HttpClient) {
    }

    restaurants(search?: string): Observable<Restaurant[]> {
      let params: HttpParams = undefined;

      if (search){
        params = new HttpParams().set('q', search);
      }

      return this
        .http
        .get<Restaurant[]>(`${MEAT_API}/restaurants`, { params });
    }

    restaurant(id: string): Observable<Restaurant>{
        return this
          .http
          .get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
    }
}
