import { NgModule, ModuleWithProviders } from "@angular/core";

import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";

import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart-service";
import { RestaurantesService } from "app/restaurantes/restaurantes.service";
import { OrderService } from "app/order/order.service";

import { NotificationService } from "./messages/notification.service";



@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SheredModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SheredModule,
            providers: [ShoppingCartService, RestaurantesService, OrderService, NotificationService]
        }
    }
} 