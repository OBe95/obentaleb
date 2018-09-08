import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'obe-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  moreDetails: { [id: string]: boolean; } = {};

  constructor() { }

  ngOnInit() {
  }

  toggleMoreDetails = (id: string) => {
    this.moreDetails[id] = !this.moreDetails[id];
  }

}
