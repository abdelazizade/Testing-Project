import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from "@angular/router";
import { Login } from "../auth/login/login";
import { Posts } from "../modules/posts/posts";

export const loginGaurd: CanDeactivateFn<any> = 
(component: Login, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) => {
   if (!component.isFormValid()) {
      const leave = confirm('You have unsaved changes. Are you sure you want to leave?');
      if (!leave) {
        component.registerForm.markAllAsTouched();
        return false;
      }
      return true;
    }
    return true;
}