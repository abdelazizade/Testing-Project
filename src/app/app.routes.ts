import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Service } from './components/service/service';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Posts } from './components/posts/posts';
import { PostDetails } from './components/post-details/post-details';
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
