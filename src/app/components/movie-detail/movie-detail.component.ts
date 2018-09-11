import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {
  private route: ActivatedRoute;
  private movieService: MovieService;
  private movieName: string;
  public movie: object;

  constructor(route: ActivatedRoute, movieService: MovieService) {
    this.movieService = movieService;
    this.route = route;

    this.route.params.subscribe(params => {
      this.movieName = params.name;
    });
  }

  public ngOnInit() {
    this.movie = this.movieService.findMovieByName(this.movieName);
  }
}
