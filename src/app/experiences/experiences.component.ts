import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'obe-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
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
export class ExperiencesComponent implements OnInit {
  moreDetails: { [id: string]: boolean; } = {};
  experiences = [
    {
      date: 'experiences_altersolutions_date',
      content: [
        {
          title: 'experiences_altersolutions_title',
          details: 'experiences_altersolutions_details',
          technologies: 'experiences_altersolutions_technologies'
        }
      ]
    },
    {
      date: 'experiences_saham_date',
      content: [
        {
          id: 'saham',
          title: 'experiences_saham_title',
          details: 'experiences_saham_details',
          more: 'experiences_saham_more_details',
          technologies: 'experiences_saham_technologies'
        }
      ]
    },
    {
      date: 'experiences_maltem_date',
      content: [
        {
          title: 'experiences_maltem_title',
          details: 'experiences_maltem_details',
          technologies: 'experiences_maltem_technologies'
        }
      ]
    },
    {
      date: 'experiences_nimbleways_date',
      content: [
        {
          id: 'nimbleways',
          title: 'experiences_nimbleways_title',
          details: 'experiences_nimbleways_details',
          more: 'experiences_nimbleways_more_details',
          technologies: 'experiences_nimbleways_technologies'
        }
      ]
    },
    {
      date: 'experiences_adias_date',
      content: [
        {
          id: 'adias',
          title: 'experiences_adias_title',
          details: 'experiences_adias_details',
          more: 'experiences_adias_more_details',
          technologies: 'experiences_adias_technologies'
        }
      ]
    },
    {
      date: 'experiences_optimaco_date',
      content: [
        {
          id: 'optimaco',
          title: 'experiences_optimaco_title',
          details: 'experiences_optimaco_details',
          more: 'experiences_optimaco_more_details',
          technologies: 'experiences_optimaco_technologies'
        }
      ]
    },
    {
      date: 'experiences_twinprint_date',
      content: [
        {
          title: 'experiences_twinprint_title',
          details: 'experiences_twinprint_details',
          technologies: 'experiences_twinprint_technologies'
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  toggleMoreDetails = (id: string) => {
    this.moreDetails[id] = !this.moreDetails[id];
  }

}
