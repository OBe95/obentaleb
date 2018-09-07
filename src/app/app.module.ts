import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutSideComponent } from './about-side/about-side.component';

import { ParticlesModule } from 'angular-particle';
import { FormationComponent } from './formation/formation.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutSideComponent,
    FormationComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
