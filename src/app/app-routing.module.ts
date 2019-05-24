import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularPageComponent } from './popular-page/popular-page.component';
import { NewMoviesListComponent } from './new-movies-list/new-movies-list.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: NewMoviesListComponent
  },
  {
    path: 'popular',
    component: PopularPageComponent
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
