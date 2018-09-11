
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

// Missing Components
export const routes: Routes = [
  {
    path: 'home',
    component: MovieListComponent,
    data: { title: 'Home' }
  },
  {
    path: 'detail/:name',
    component: MovieDetailComponent,
    data: { title: 'Movie Detail'}
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: MovieListComponent
  }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

