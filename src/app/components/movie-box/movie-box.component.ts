import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-box',
  templateUrl: './movie-box.component.html'
})
export class MovieBoxComponent {
  @Input() public movie: object;
}
