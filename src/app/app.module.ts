import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { NgxParticlesModule } from '@tsparticles/angular';

import { AppComponent } from './app.component';
import { AboutSideComponent } from './about-side/about-side.component';
import { EducationComponent } from './education/education.component';
import { ExperiencesComponent } from './experiences/experiences.component';

@NgModule({
  declarations: [AppComponent, AboutSideComponent, EducationComponent, ExperiencesComponent],
  imports: [BrowserAnimationsModule, BrowserModule, HttpClientModule, MatTooltipModule, NgxParticlesModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
