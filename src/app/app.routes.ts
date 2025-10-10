import { Routes } from '@angular/router';
import { Home } from './modules/home/home';
import { About } from './modules/about/about';
import { Service } from './modules/service/service';
import { PageNotFound } from './shared/page-not-found/page-not-found';
import { Posts } from './modules/posts/posts';
import { PostDetails } from './modules/post-details/post-details';
import { Login } from './auth/login/login';
import { ProductDetailsResolver } from './guards/product-details';
import { postsGuard, postsMatchGuard } from './guards/posts.guard';
import { loginGaurd } from './guards/login.guard';

export const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: Home },
  // { path: 'about', component: About },
  // { path: 'posts', canActivate: [postsGuard], canMatch: [postsMatchGuard],
  //   loadComponent:()=> import('./modules/posts/posts').then(m => m.Posts) 
  // },
  // { path: 'posts/detail/:id', component: PostDetails, 
  //   resolve: {product: ProductDetailsResolver}},
  // { path: 'service', component: Service },
  // { path: 'login', component: Login, canDeactivate: [loginGaurd] },
  // { path: '**', component: PageNotFound },
];
