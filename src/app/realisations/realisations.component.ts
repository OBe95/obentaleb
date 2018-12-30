import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'obe-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss'],
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
export class RealisationsComponent implements OnInit {
  moreDetails: { [id: string]: boolean; } = {};
  realisations = [
    {
      date: 'achievements_sprint_deps_graph_date',
      content: [
        {
          id: 'sprint_deps_graph',
          title: 'achievements_sprint_deps_graph_title',
          details: 'achievements_sprint_deps_graph_details',
          more: 'achievements_sprint_deps_graph_more_details',
          technologies: 'achievements_sprint_deps_graph_technologies',
          class: 'fa fa-flask'
        }
      ]
    },
    {
      date: 'achievements_mcpc2018_date',
      content: [
        {
          title: 'achievements_mcpc2018_title',
          details: 'achievements_mcpc2018_details',
          technologies: 'achievements_mcpc2018_technologies',
          class: 'fa fa-flask'
        }
      ]
    },
    {
      date: 'achievements_obentalebdo_date',
      content: [
        {
          id: 'obentalebdo',
          title: 'achievements_obentalebdo_title',
          details: 'achievements_obentalebdo_details',
          more: 'achievements_obentalebdo_more_details',
          technologies: 'achievements_obentalebdo_technologies',
          class: 'fa fa-flask'
        }
      ]
    },
    {
      date: 'achievements_codeit3_date',
      content: [
        {
          title: 'achievements_codeit3_title',
          details: 'achievements_codeit3_details',
          technologies: 'achievements_codeit3_technologies',
          class: 'fa fa-flask'
        }
      ]
    },
    {
      date: 'achievements_ehtpnetwork_date',
      content: [
        {
          id: 'ehtpnetwork',
          title: 'achievements_ehtpnetwork_title',
          details: 'achievements_ehtpnetwork_details',
          more: 'achievements_ehtpnetwork_more_details',
          technologies: 'achievements_ehtpnetwork_technologies',
          class: 'fa fa-flask'
        }
      ]
    },
    {
      date: 'achievements_may2017_date',
      content: [
        {
          title: 'achievements_may2017_codeit2_title',
          details: 'achievements_may2017_codeit2_details',
          technologies: 'achievements_may2017_codeit2_technologies',
          class: 'fa fa-flask'
        },
        {
          title: 'achievements_may2017_jnjd11_title',
          details: 'achievements_may2017_jnjd11_details',
          technologies: 'achievements_may2017_jnjd11_technologies',
          class: 'fa fa-flask'
        },
        {
          title: 'achievements_may2017_codeit2_org_title',
          details: 'achievements_may2017_codeit2_org_details',
          technologies: 'achievements_may2017_codeit2_org_technologies',
          class: 'fa fa-flask'
        }
      ]
    },
    {
      date: 'achievements_jiragateway_date',
      content: [
        {
          id: 'jiragateway',
          title: 'achievements_jiragateway_title',
          details: 'achievements_jiragateway_details',
          more: 'achievements_jiragateway_more_details',
          technologies: 'achievements_jiragateway_technologies',
          class: 'fa fa-graduation-cap'
        }
      ]
    },
    {
      date: 'achievements_capgeminicc_date',
      content: [
        {
          title: 'achievements_capgeminicc_title',
          details: 'achievements_capgeminicc_details',
          technologies: 'achievements_capgeminicc_technologies',
          class: 'fa fa-flask'
        }
      ]
    },
    {
      date: 'achievements_mcpc2016_date',
      content: [
        {
          title: 'achievements_mcpc2016_title',
          details: 'achievements_mcpc2016_details',
          technologies: 'achievements_mcpc2016_technologies',
          class: 'fa fa-flask'
        }
      ]
    },
    {
      date: 'achievements_smartgm_date',
      content: [
        {
          id: 'smartgm',
          title: 'achievements_smartgm_title',
          details: 'achievements_smartgm_details',
          more: 'achievements_smartgm_more_details',
          technologies: 'achievements_smartgm_technologies',
          class: 'fa fa-graduation-cap'
        }
      ]
    },
    {
      date: 'achievements_2015_2016_date',
      content: [
        {
          title: 'achievements_2015_2016_comm_cs_title',
        },
        {
          title: 'achievements_2015_2016_hitc_title',
          details: 'achievements_2015_2016_hitc_details',
          class: 'fa fa-flask'
        },
        {
          title: 'achievements_2015_2016_forum_title',
          details: 'achievements_2015_2016_forum_details',
          class: 'fa fa-flask'
        },
        {
          title: 'achievements_2015_2016_jnjd10_title',
          details: 'achievements_2015_2016_jnjd10_details',
          class: 'fa fa-flask'
        },
        {
          title: 'achievements_2015_2016_ehtpweb_title',
          details: 'achievements_2015_2016_ehtpweb_details',
          technologies: 'achievements_2015_2016_ehtpweb_technologies',
          class: 'fa fa-graduation-cap'
        },
        {
          title: 'achievements_2015_2016_codejam_title',
          details: 'achievements_2015_2016_codejam_details',
          class: 'fa fa-flask'
        },
        {
          title: 'achievements_2015_2016_compiler_title',
          details: 'achievements_2015_2016_compiler_details',
          class: 'fa fa-graduation-cap'
        }
      ]
    },
    {
      date: 'achievements_2014_2015_date',
      content: [
        {
          title: 'achievements_2014_2015_cs_title',
          details: 'achievements_2014_2015_cs_details',
          class: 'fa fa-flask'
        },
        {
          title: 'achievements_2014_2015_pip_title',
          details: 'achievements_2014_2015_pip_details',
          class: 'fa fa-flask'
        },
        {
          title: 'achievements_2014_2015_jnjd9_title',
          details: 'achievements_2014_2015_jnjd9_details',
          class: 'fa fa-flask'
        },
        {
          title: 'achievements_2014_2015_codejam_title',
          details: 'achievements_2014_2015_codejam_details',
          class: 'fa fa-flask'
        },
        {
          title: 'achievements_2014_2015_2dgame_title',
          details: 'achievements_2014_2015_2dgame_details',
          class: 'fa fa-graduation-cap'
        }
      ]
    },
    {
      date: 'achievements_prev_date',
      content: [
        {
          title: 'achievements_prev_inptprepa_title'
        },
        {
          title: 'achievements_prev_bloggerexp_title',
          details: 'achievements_prev_bloggerexp_details',
          class: 'fa fa-flask'
        },
        {
          title: 'achievements_prev_khamsat_title'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  toggleMoreDetails = (id: string) => {
    this.moreDetails[id] = !this.moreDetails[id];
  }

}
