import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { of } from "rxjs";

export const postsGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return of(true)
}

export const postsMatchGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
    return of(false)
}