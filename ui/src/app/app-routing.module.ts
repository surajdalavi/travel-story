import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './authentication/landing-page/landing-page.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { PostsComponent } from './posts/posts.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home-page', component: PostsComponent },
  { path: 'profile', component: PostsComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'post/:id/:slug',
    loadChildren: () =>
      import('./posts/post/post.module').then((m) => m.PostModule),
    data: { routeState: 3 },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
