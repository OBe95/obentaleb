import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';

import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { AboutSideComponent } from './about-side/about-side.component';
import { FormationComponent } from './formation/formation.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { RealisationsComponent } from './realisations/realisations.component';

import { TranslateService } from './services/translate.service';
import { TranslatePipe } from './services/translate.pipe';

export function setupTranslateFactory(translator: TranslateService): Function {
  return () => translator.use('fr');
}

@NgModule({
  declarations: [
    AppComponent,
    AboutSideComponent,
    FormationComponent,
    ExperiencesComponent,
    RealisationsComponent,
    TranslatePipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatTooltipModule,
    ParticlesModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
