import { Component } from '@angular/core';
import { ACHIEVEMENTS, EXPERIENCES } from './data';

@Component({
  selector: 'obe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  experiences = EXPERIENCES;
  achievements = ACHIEVEMENTS;
}
