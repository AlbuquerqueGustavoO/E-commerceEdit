import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS } from '@angular/common/http'


import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";

import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart-service";
import { RestaurantesService } from "app/restaurantes/restaurantes.service";
import { OrderService } from "app/order/order.service";

import { NotificationService } from "./messages/notification.service";
import { LoginService } from '../security/login/login.service'
import { LoggedInGuard } from "app/security/loggedin.guard";
import { LeaveOrderGuard } from "app/order/leave-order.guard";
import { AuthInterceptor } from "app/security/auth.interceptor";



@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SheredModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SheredModule,
            providers: [ShoppingCartService, RestaurantesService,
                OrderService, NotificationService, LoginService,
                LoggedInGuard, LeaveOrderGuard,
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
            ]
        }
    }
} 