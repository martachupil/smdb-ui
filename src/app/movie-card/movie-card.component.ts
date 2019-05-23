import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: any;
  @Input() imageUrl: string;

  @Output() getDetailsById = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  getMoreInfo(id: number) {
    this.getDetailsById.emit(id);
  }

}
