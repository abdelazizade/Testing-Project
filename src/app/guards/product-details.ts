import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { FetchDataClass } from "../services/fetch-data/fetch-data";

export const ProductDetailsResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const fetchData = inject(FetchDataClass)

        const id = route.paramMap.get('id');
        console.log('from Resolver');
        
        return fetchData.getDataById('posts/', id);
    
}