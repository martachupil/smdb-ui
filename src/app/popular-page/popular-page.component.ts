import { Component, OnInit } from '@angular/core';
import { TmdbService, SortType, SortOrder } from '../services/tmdb.service';
@Component({
  selector: 'app-popular-page',
  templateUrl: './popular-page.component.html',
  styleUrls: ['./popular-page.component.scss']
})
export class PopularPageComponent implements OnInit {

  popularMovies = [];

  constructor(private tmdb: TmdbService) {}

  async ngOnInit() {
    try {
      const result = await this.tmdb.discover(SortType.Popularity, SortOrder.Desc);
      console.log(result);
    } catch (err) {
      console.error({err});
    }
  }

}
