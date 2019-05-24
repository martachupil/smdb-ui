import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  loading = false;
  imageUrl: string;
  error: string;

  constructor(private route: ActivatedRoute, private tmdb: TmdbService) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const movieId = params.id;
      if (!movieId) {
        return;
      }

      this.getMovieData(movieId);
    });
  }

  async getMovieData(id: string) {
    try {
      this.loading = true;
      this.movie = await this.tmdb.getMovieById(id);
      this.imageUrl = await this.tmdb.formatImageUrl(this.movie.poster_path);
    } catch (err) {
      this.error = err.message;
      console.error(err);
    } finally {
      this.loading = false;
    }
  }

}
