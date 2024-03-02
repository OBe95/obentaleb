import { Experience } from '../models';

export const EXPERIENCES: Experience[] = [
  {
    date: 'January 2024 - Now',
    contents: [
      {
        id: 'akur8',
        title: 'Software Engineer - Akur8, France'
      }
    ]
  },
  {
    date: 'March 2021 - December 2023',
    contents: [
      {
        id: 'contentsquare',
        title: 'Full-Stack Engineer - ContentSquare, France',
        details: 'Workspace - Benchmarks Tech-lead',
        more: `<ul class="ps-2 m-0">
            <li>The workspace module allows Contentsquare clients’ employees to build and share personalized dashboards to follow-up on their business interests and KPIs through a list of metrics and insights gathered, anonymously, from users' interactions with their website/application.</li>
            <li>After consenting to use and be part of benchmarks, the benchmarks module allows the clients to compare to other clients' metrics, the pool of competitors stays anonymous as the clients trust our Customer Success Managers to define the pool matching their benchmarks needs while respecting the solution constraints (minimum number of competitors in the pool, similarity score, data availability...)</li>
          </ul>`,
        technologies: 'Angular, VueJs, StencilJs, NestJs, Jest, Github, Jenkins'
      }
    ]
  },
  {
    date: 'June 2019 - March 2021',
    contents: [
      {
        id: 'alter_solutions',
        title: 'Full-Stack Engineer - Alter Solutions, France',
        details: 'Mission at CANAL+, Font-end Engineer / Tech-lead',
        more: `<ul class="ps-2 m-0">
            <li>Ensuring the front end integration of Netflix in the CANAL+ set-top boxes, participating in the integration of Disney+, the improvement of the existing product and the development of new features; A CANAL+ set-top box allows its users, among other features, to consume programs and series depending on the offer to which the user is subscribed, to consume live via satellite or via the internet (OTT: over-the-top) and, recently, it allows access to Netflix via a dedicated channel or a recommended program...</li>
            <li>Preparing the "portable" version of the webapp to be used on FullOTT devices (PlayStation 5, PlayStation 4, Samsung TVs...).</li>
          </ul>`,
        technologies: 'ReactJS, Redux, RxJS, Lodash, Mocha, Jest, Bitbucket, Jenkins'
      }
    ]
  },
  {
    date: 'June 2018 - May 2019',
    contents: [
      {
        id: 'saham',
        title: 'Full-Stack Engineer - Saham Assurance, Digital Factory, Morocco',
        details: 'Designing and developing MyAuto - Material Claim',
        more: 'The main purpose of the solution is to improve the user experience while processing material claims: by replacing a set of systems used to process a single claim and thus be the only entry point for managers to thoroughly process a given claim, and by incorporating new features not offered in the replaced solutions.',
        technologies:
          'ReactJS, Redux, NodeJS, LoopBack, Vagrant, Ansible, Kibana, Moment, Lodash, Jest, Sinon, SocketIO, Github, CircleCi, Nginx'
      }
    ]
  },
  {
    date: 'March 2018 - June 2018',
    contents: [
      {
        id: 'maltem',
        title: 'Software Engineer - Maltem Africa, Morocco',
        details: 'Mission at the Digital Factory of Saham Assurance',
        technologies: 'ReactJS, Redux, NodeJS, LoopBack, Vagrant, Ansible'
      }
    ]
  },
  {
    date: 'August 2017 - February 2018',
    contents: [
      {
        id: 'nimbleways',
        title: 'Software Engineer - Nimble Ways, Morocco',
        details: 'Developing a search engine for a bank entity',
        more: 'The solution regularly collects, processes and analyzes the content of the different sources (HTML, PDF, WORD, EXCEL...), to put them, intelligently, at the disposal of the end users (by applying synonyms and stop words...). It also collects, as a background task, statistics of its use (clicks on the results, votes...) that are processed by the Machine Learning micro-service to improve the ranking of results.',
        technologies:
          'Angular, Angular Material, NodeJS, Express, Java, Solr, Python, Scrapy, Splash, Klein, MongoDB, Machine learning, Docker, Gitlab, Gitlab-Ci'
      }
    ]
  },
  {
    date: 'February 2017 - July 2017',
    contents: [
      {
        id: 'adias',
        title: 'Graduation Project Internship - ADIAS',
        details: 'Participating in the development of «Control Tower» solutions',
        more: 'A web-based solution that enables customers of a leading transit and transport company in Morocco to keep track, on demand and in real time, of their transit files, while allowing managers and decision-makers to evaluate the performance of their employees and services.',
        technologies: 'JEE, Spring MVC, Spring Security, HTML/CSS, jQuery/Javascript, Bootstrap, Highcharts'
      }
    ]
  },
  {
    date: 'July 2016 - September 2016',
    contents: [
      {
        id: 'optimaco',
        title: 'Engineer Internship - OPTIMACO',
        details: 'Design and implementation of a software solution for the construction industry',
        more: 'The solution makes it possible to combine information systems and operational processes related to the construction sector, specifically, the needs of OPTIMACO projects: Daily monitoring of their sites activities; Automatic management control of the various tasks of their projects, their subcontractors invoicings and materials stock.',
        technologies: 'SQL Server 2012, Hibernate, Spring MVC, JEE'
      }
    ]
  },
  {
    date: 'August 2015',
    contents: [
      {
        id: 'twinprint',
        title: 'Professional Induction Internship - TwinPrint',
        details: 'Graphic designs and development of a showcase website for TwinPrint',
        technologies: 'Adobe Illustrator, Adobe Photoshop, HTML5, CSS3, JavaScript'
      }
    ]
  }
];
