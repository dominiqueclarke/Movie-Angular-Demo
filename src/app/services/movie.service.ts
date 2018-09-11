import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {
  private http: HttpClient;
  private movies: Array<object>;

  constructor(http: HttpClient) {
    this.http = http;

    this.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

  public getMovies(): Observable<any> {
    return this.http.get('/assets/movies.json');
  }

  public findMovieByName(name: string): object {
    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].name === name) {
        console.log(this.movies[i]);
        return this.movies[i];
      }
    }
  }
}
