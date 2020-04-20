import { Injectable } from "@angular/core"
import { Http } from "@angular/http"
import { Observable } from "rxjs"
//import { Observable } from "rxjs/Observable"

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Restaurant } from "./restaurant/restaurant.model"
import { MEAT_API } from "./app.api"

import { ErrorHandler } from '../app.error-handler'
//import { errorHandler } from "@angular/platform-browser/src/browser"
//import { errorHandler } from "@angular/platform-browser/src/browser"

import { MenuItem } from "app/restaurant-detail/menu-item/menu-item-model"


@Injectable()
export class RestaurantesService {

    constructor(private http: Http) { }

    restaurantes(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurantes`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurantes/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurantes/${id}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/restaurantes/${id}/menu`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }
}