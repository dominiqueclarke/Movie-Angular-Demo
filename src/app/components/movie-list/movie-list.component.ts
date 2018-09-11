import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {
  private movieService: MovieService;
  public movies: Array<object>;

  constructor(movieService: MovieService) {
    this.movieService = movieService;
  }

  public ngOnInit(): void {
    this.movieService.getMovies()
      .subscribe(movies => {
        this.movies = movies;
      });
  }
}
