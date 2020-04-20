import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { RestaurantesService } from '../restaurantes/restaurantes.service'
import { Restaurant } from 'app/restaurantes/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantesService: RestaurantesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantesService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
