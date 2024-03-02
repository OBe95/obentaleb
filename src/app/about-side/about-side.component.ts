import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IParticlesProps, NgParticlesService } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';

@Component({
  selector: 'obe-about-side',
  templateUrl: './about-side.component.html',
  styleUrls: ['./about-side.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutSideComponent implements OnInit {
  particlesOptions: IParticlesProps = {
    particles: {
      number: {
        value: 150
      },
      color: {
        value: '#D9B310'
      },
      links: {
        enable: true,
        distance: 100
      },
      shape: {
        type: 'circle'
      },
      move: {
        enable: true,
        speed: 1
      },
      poisson: {
        enable: true
      }
    },
    fullScreen: {
      enable: false,
      zIndex: 0
    }
  };

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      await loadSlim(engine);
    });
  }
}
