import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model'
import { RestaurantesService } from './restaurantes.service';

import { trigger, state, style, transition, animate } from '@angular/animations'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

import { switchMap, tap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators'
import { Observable, from } from 'rxjs'


@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({ opacity: 0, "max-height": "0px" })),
      state('visible', style({ opacity: 1, "max-height": "70px", "margin-top": "20px" })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantesComponent implements OnInit {

  searchBarState = 'hidden'
  restaurantes: Restaurant[]

  searchForm: FormGroup
  searchControl: FormControl

  constructor(private restaurantesService: RestaurantesService, private fb: FormBuilder) { }

  ngOnInit() {

    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
      .pipe(debounceTime(500),
        distinctUntilChanged(),
        switchMap(searchTerm =>
          this.restaurantesService
            .restaurantes(searchTerm)
            .pipe(catchError(error => from([]))))

      ).subscribe(restaurantes => this.restaurantes = restaurantes)

    this.restaurantesService.restaurantes()
      .subscribe(restaurantes => this.restaurantes = restaurantes)
  }

  togleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

}
