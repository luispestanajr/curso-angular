import { Review } from './reviews.model';
import { MEAT_API } from '../../app.api';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from '../../app.error-handler';

@Injectable()
export class ReviewsService {
    constructor(private http: Http){

    }

    reviews(restaurantId: string): Observable<Review[]>{
        return this.http.get(`${MEAT_API}/restaurants/${restaurantId}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }
}
