import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutSideComponent } from './about-side/about-side.component';

import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [
    AppComponent,
    AboutSideComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
