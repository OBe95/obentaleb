import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'obe-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss']
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
