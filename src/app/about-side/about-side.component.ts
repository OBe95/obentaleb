import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'obe-about-side',
  templateUrl: './about-side.component.html',
  styleUrls: ['./about-side.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutSideComponent implements OnInit {
  style: object = {};
  params: object = {};
  width: number = 100;
  height: number = 100;

  constructor(public translator: TranslateService) { }

  ngOnInit() {
    this.style = {
      'position': 'absolute',
      'width': '100%',
      'height': '98%',
      'z-index': 1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'opacity': 0.4,
    };

    this.params = {
      particles: {
        number: {
          value: 150,
        },
        color: {
          value: '#D9B310'
        },
        shape: {
          type: 'polygon',
        },
      }
    };
  }

  switchLang(lang: string) {
    this.translator.use(lang);
  }

}
