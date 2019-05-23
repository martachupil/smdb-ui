import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() title: string;
  @Input() imageUrl: string;
  @Input() id: number;

  @Output() getDetailsById = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  getMoreInfo() {
    this.getDetailsById.emit(this.id);
  }

}
