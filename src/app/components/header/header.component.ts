import { Component, OnInit, Input } from '@angular/core';

interface MenuItem {
  url: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

  menu: MenuItem[] = [
    {
      url: '/popular',
      label: 'Popular'
    },
    {
      url: '#',
      label: 'Watch List'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
