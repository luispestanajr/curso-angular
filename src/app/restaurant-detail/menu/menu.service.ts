import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';
import { MEAT_API } from 'app/app.api';

@Injectable()
export class MenuService {
  constructor(private http: HttpClient) {
  }

  menus(id: string): Observable<MenuItem[]>{
    return this
      .http
      .get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
  }
}
