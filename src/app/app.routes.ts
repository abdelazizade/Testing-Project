import { Routes } from '@angular/router';
import { Home } from './modules/home/home';
import { About } from './modules/about/about';
import { Service } from './modules/service/service';
import { PageNotFound } from './shared/page-not-found/page-not-found';
import { Posts } from './modules/posts/posts';
import { PostDetails } from './modules/post-details/post-details';
import { Login } from './auth/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'posts', component: Posts },
  { path: 'posts/detail/:id', component: PostDetails },
  { path: 'service', component: Service },
  { path: 'login', component: Login },
  { path: '**', component: PageNotFound },
];
