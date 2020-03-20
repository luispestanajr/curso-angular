import { Component, OnInit } from '@angular/core';
import { ReviewsService } from './reviews.service';
import { ActivatedRoute } from '@angular/router';
import { Review } from './reviews.model';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Review[];

  constructor(private reviewService: ReviewsService,
      private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    // this.reviewService
    //   .reviews()
  }

}




// import { Component, OnInit } from '@angular/core';
// import { RestaurantsService } from '../restaurants/restaurants.service';
// import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
// import { ActivatedRoute } from '@angular/router';
// import { Review } from './reviews.model';

// @Component({
//   selector: 'mt-restaurant-detail',
//   templateUrl: './restaurant-detail.component.html'
// })
// export class RestaurantDetailComponent implements OnInit {

//   restaurant: Restaurant;

//   constructor(private restaurantService: RestaurantsService, 
//       private route: ActivatedRoute) { }

//   ngOnInit() {
//     this.restaurantService
//         .restaurant(this.route.snapshot.params['id'])
//         .subscribe(resp => {
//           this.restaurant = resp
//         });
//   }

// }
