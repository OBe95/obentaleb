import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { AboutSideComponent } from './about-side/about-side.component';

import { ParticlesModule } from 'angular-particle';
import { FormationComponent } from './formation/formation.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { RealisationsComponent } from './realisations/realisations.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutSideComponent,
    FormationComponent,
    ExperiencesComponent,
    RealisationsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatTooltipModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
