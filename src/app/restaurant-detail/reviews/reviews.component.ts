import { Component, OnInit } from '@angular/core';
import { ReviewsService } from './reviews.service';
import { ActivatedRoute } from '@angular/router';
import { Review } from './reviews.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private reviewService: ReviewsService,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.reviewService
        .reviews(this.route.parent.snapshot.params['id']);
  }
}
