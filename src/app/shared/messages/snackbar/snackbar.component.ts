import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { NotificationService } from '../notification.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      state('hidden', style({
        opacity: 0,
        bottom: 0
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message = 'Hello there';
  snackVisibility = 'hidden';

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService
      .notifier
      .do(message => {
        this.message = message;
        this.snackVisibility = 'visible';
      })
      .switchMap(() => Observable.timer(3000))
      .subscribe(() => this.snackVisibility = 'hidden');
  }

  toggleSnack() {
    this.snackVisibility =
      this.snackVisibility === 'hidden' ? 'visible' : 'hidden';
  }
}
