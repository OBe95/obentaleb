import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Experience, ExperienceContent } from '../models';

@Component({
  selector: 'obe-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  animations: [
    trigger('detailsState', [
      transition(':enter', [
        style({ 'line-height': 0, opacity: 0, color: 'transparent' }),
        animate('.1s ease-in-out', style({ 'line-height': 1, opacity: 1 }))
      ]),
      transition(':leave', [
        style({ 'line-height': 1, opacity: 1 }),
        animate('.1s ease-in-out', style({ 'line-height': 0, opacity: 0, color: 'transparent' }))
      ])
    ])
  ]
})
export class ExperiencesComponent {
  @Input({ required: true }) title: string;
  @Input({ required: true }) experiences: Experience[];

  protected moreDetails: { [id: string]: boolean } = {};

  toggleMoreDetails = (content: ExperienceContent) => {
    if (content.more) {
      this.moreDetails[content.id] = !this.moreDetails[content.id];
    }
  };
}
