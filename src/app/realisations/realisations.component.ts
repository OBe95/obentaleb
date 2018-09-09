import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'obe-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss'],
  animations: [
    trigger(
      'detailsState',
      [
        transition(
          ':enter', [
            style({ 'line-height': 0, opacity: 0, color: 'transparent' }),
            animate('.1s ease-in-out', style({ 'line-height': 1, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', [
            style({ 'line-height': 1, opacity: 1 }),
            animate('.1s ease-in-out', style({ 'line-height': 0, opacity: 0, color: 'transparent' }))
          ]
        )]
    )
  ]
})
export class RealisationsComponent implements OnInit {
  moreDetails: { [id: string]: boolean; } = {};

  constructor() { }

  ngOnInit() {
  }

  toggleMoreDetails = (id: string) => {
    this.moreDetails[id] = !this.moreDetails[id];
  }

}
