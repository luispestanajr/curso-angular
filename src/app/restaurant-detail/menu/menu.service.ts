import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';
import { MEAT_API } from 'app/app.api';
import { ErrorHandler } from 'app/app.error-handler';

@Injectable()
export class MenuService {
  constructor(private http: Http) {
  }

  menus(id: string): Observable<MenuItem[]>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }
}
