import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item/menu-item.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(private menuService: MenuService,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.menuService.menus(
      this.route.parent.snapshot.params['id']
    );
  }
}
