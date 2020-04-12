import { Review } from './reviews.model';
import { MEAT_API } from '../../app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReviewsService {
    constructor(private http: HttpClient) {

    }

    reviews(restaurantId: string): Observable<Review[]>{
        return this
          .http
          .get<Review[]>(`${MEAT_API}/restaurants/${restaurantId}/reviews`);
    }
}
