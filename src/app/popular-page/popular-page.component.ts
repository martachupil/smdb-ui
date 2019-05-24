import { Component, OnInit, Output } from '@angular/core';
import { TmdbService, SortType, SortOrder } from '../services/tmdb.service';
@Component({
  selector: 'app-popular-page',
  templateUrl: './popular-page.component.html',
  styleUrls: ['./popular-page.component.scss']
})
export class PopularPageComponent implements OnInit {

  popularMovies: any[] = [];

  constructor(private tmdb: TmdbService) { }

  async ngOnInit() {
    try {
      const result: any = await this.tmdb.discover(SortType.Popularity, SortOrder.Desc);
      this.popularMovies = result.results;
    } catch (err) {
      console.error({ err });
    }
  }

}
