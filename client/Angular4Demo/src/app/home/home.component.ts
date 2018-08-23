import {Component, ViewChild, OnInit} from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public currentSlide : any = 1;
  ngOnInit() {}


  constructor() {
    
  }


}
