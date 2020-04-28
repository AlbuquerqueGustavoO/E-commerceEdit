import { CanLoad, Route } from '@angular/router'

export class LoggedInGuard implements CanLoad {

    canLoad(route: Route): boolean {
        console.log(route)
        return false
    }

}