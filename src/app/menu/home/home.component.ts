import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  providers: [
    { provide: CarouselConfig, useValue: { isAnimated: true, interval: 3500, noPause: false, showIndicators: true } }
  ]

})

export class HomeComponent implements OnInit {

imageArray = [
    {
      url: 'https://igscorp.net/wp-content/uploads/2017/05/sales-1.jpg',
      shot: '../employee/emp-view',
    },
  {
    url: 'https://www.garrettecustomhomes.com/2019/wp-content/themes/mc-base/images/banner-appointments-g.jpg',
    shot: '../services',
  }
];

constructor() { }

  ngOnInit(): void {


  }



}
