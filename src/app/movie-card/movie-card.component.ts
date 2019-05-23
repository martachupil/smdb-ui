import { Component, OnInit, Input } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: any;

  constructor(private tmdb: TmdbService) { }

  get imageUrl() {
    return this.tmdb.formatImageUrl(this.movie.poster_path);
  }

  ngOnInit() {
  }
}
