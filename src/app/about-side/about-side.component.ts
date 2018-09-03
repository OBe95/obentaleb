import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'obe-about-side',
  templateUrl: './about-side.component.html',
  styleUrls: ['./about-side.component.scss']
})
export class AboutSideComponent implements OnInit {
  style: object = {};
  params: object = {};
  width: number = 100;
  height: number = 100;
  constructor() { }

  ngOnInit() {
    this.style = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'z-index': 1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'opacity': 0.6,
    };

    this.params = {
      particles: {
        number: {
          value: 150,
        },
        color: {
          value: '#ff9900'
        },
        shape: {
          type: 'polygon',
        },
      }
    };
  }

}
