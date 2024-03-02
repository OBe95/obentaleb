import { Experience } from '../models';

export const ACHIEVEMENTS: Experience[] = [
  {
    date: 'December 2018',
    contents: [
      {
        id: 'sprint_deps_graph',
        title: 'Developing Sprint Dependencies Graph for Trello',
        details: 'A web application to generate dependencies graph for sprint cards on Trello',
        more: 'After authorizing read only access to his/her boards on Trello, the user selects the target board and the label to identify the cards to use to draw the sprint dependencies graph, Source code: <a href="https://github.com/OBe95/sprint-deps-graph-trello" target="_blank"><span class="me-1">Github</span><i class="fa fa-external-link m-l-1"></i></a>.<br />Testing <i>React Hooks</i> was one of the main motivations for developing the application.',
        technologies: 'ReactJS, React Hooks, Redux, ExpressJS, Redis, SocketIO',
        class: 'fa fa-flask'
      }
    ]
  },
  {
    date: 'October 2018',
    contents: [
      {
        id: 'mcpc2018',
        title: 'Member of the judges of Moroccan Collegiate Programming Contest - MCPC 2018',
        details:
          'Verifying solutions submitted by MCPC 2018 contestants held in 1337 school, Khouribga. <a title="Certificate" href="assets/certificates/MCPC2018.pdf" target="_blank"><span class="me-1">Certificate</span><i class="fa fa-external-link m-l-1"></i></a>',
        technologies: 'PC2, Competitive Programming',
        class: 'fa fa-flask'
      }
    ]
  },
  {
    date: 'September 2018',
    contents: [
      {
        id: 'obentalebdo',
        title: 'Updating obentaleb.com website',
        details: 'Using Angular and deploying in a DigitalOcean VPS',
        more: `The old version of the site was set up in October 2016 using Google's Blogger platform and is still accessible via <a href="https://obentaleb.blogspot.com/" target="_blank"><span class="me-1">OTHMANE BENTALEB CV - Blogger</span><i class="fa fa-external-link m-l-1"></i></a>.`,
        technologies: `Angular 6, Angular Animations, VPS, Nginx, Let's Encrypt, SSL`,
        class: 'fa fa-flask'
      }
    ]
  },
  {
    date: 'April 2018',
    contents: [
      {
        id: 'codeit3',
        title: 'Participating in the organization of CODE IT v3.0',
        details: `Configuring the ranking system <a href="https://pc2.ecs.csus.edu/" target="_blank"><span class="me-1">PC<sup>2</sup></span><i class="fa fa-external-link m-l-1"></i></a> (Programming Contest Control) in a VPS (Vitual Private Server) and updating the <a href="https://www.linkedin.com/company/hassania-it-club" target="_blank"><span class="me-1">Hassania IT Club</span><i class="fa fa-external-link m-l-1"></i></a> website. <a title="Certificate" href="assets/certificates/CODEIT3.pdf" target="_blank"><span class="me-1">Certificate</span><i class="fa fa-external-link m-l-1"></i></a>`,
        technologies: 'VPS, PC2, Laravel, HTML/CSS, jQuery/Javascript (Bootstrap)',
        class: 'fa fa-flask'
      }
    ]
  },
  {
    date: 'February 2018',
    contents: [
      {
        id: 'ehtpnetwork',
        title: 'Developing a Web Progressive Application',
        details: 'EHTP Network - A directory for EHTP students / graduates',
        more: 'The application allows quick access, even offline, to the updated profiles of the students / graduates of the EHTP; after each sign up, a notification is sent to the members of the same promotion as the newly signed up account so they can confirm it, and once the account reaches the required number of validations, it will have access to the various features of the application.',
        technologies: 'WPA, Angular, Firebase, Firestore, Cloud Functions, Service Workers',
        class: 'fa fa-flask'
      }
    ]
  },
  {
    date: 'May 2017',
    contents: [
      {
        id: 'codeit2',
        title: 'Participating in the programming competition - CODE IT 2<sup>nd</sup> edition',
        details:
          'May 20/21, 2017 - Winning team of the 2<sup>nd</sup> prize in the 2<sup>nd</sup> edition of the national programming contest CODE IT held in EHTP.',
        technologies: 'Competitive Programming, Java, Graph, Dynamic Programming',
        class: 'fa fa-flask'
      },
      {
        id: 'jnjd11',
        title: 'Participating in the programming competition - JNJD 11<sup>th</sup> edition',
        details:
          'May 13/14, 2017 - Winning team of the 3<sup>rd</sup> prize in the 11<sup>th</sup> edition of the national programming contest JNJD held in INPT. <a title="Certificate" href="assets/certificates/JNJD11.pdf" target="_blank"><span class="me-1">Certificate</span><i class="fa fa-external-link m-l-1"></i></a>',
        technologies: 'Competitive Programming, Java, Graph, Dynamic Programming',
        class: 'fa fa-flask'
      },
      {
        id: 'codeit2_org',
        title: 'Participating in the organization of CODE IT v2.0',
        details: `Organizing the 2<sup>nd</sup> edition of the national contest CODE IT, and developing Hassania IT Club's website for event's presentation and teams registration`,
        technologies: 'Laravel, HTML/CSS, jQuery/Javascript (Bootstrap)',
        class: 'fa fa-flask'
      }
    ]
  },
  {
    date: 'November 2016 - January 2017',
    contents: [
      {
        id: 'jiragateway',
        title: 'Development Project - GFI',
        details: 'Developing a gateway between JIRA and Redmine',
        more: 'By analyzing the emails received for each creation / update from one of the ticketing tools and using the APIs of both tools, the application ensures the synchronization between the issues created by the customers on Redmine and the actual progress of GFI developpers tracked on JIRA and offers a web interface to monitor the logs for different synchronization attempts.',
        technologies: 'JEE, Spring, JIRA REST API, Redmine REST API',
        class: 'fa fa-graduation-cap'
      }
    ]
  },
  {
    date: 'December 2016',
    contents: [
      {
        id: 'capgeminicc',
        title: 'Participating in Capgemini Coding Challenge - CCC 1<sup>st</sup> edition',
        details:
          '2<sup>nd</sup> prize winner of the competition out of 1455 participants (180 finalists) from different national universities.',
        technologies: 'Competitive Programming, Java, Graph, Dynamic Programming',
        class: 'fa fa-flask'
      }
    ]
  },
  {
    date: 'October 2016',
    contents: [
      {
        id: 'mcpc2016',
        title: 'Participating in the Moroccan Collegiate Programming Contest - MCPC 2016',
        details:
          'Ranked 4<sup>th</sup> out of 100 teams from different national universities, our team was qualified to the Arab Collegiate Programming Contest (ACPC) that took place in Sharam El Sheikh. <a title="Certificate" href="assets/certificates/MCPC2016.pdf" target="_blank"><span class="me-1">Certificate</span><i class="fa fa-external-link m-l-1"></i></a>',
        technologies: 'Competitive Programming, Java, Graph, Dynamic Programming',
        class: 'fa fa-flask'
      }
    ]
  },
  {
    date: 'March 2016 - May 2016',
    contents: [
      {
        id: 'smartgm',
        title: 'Java-UML Project - CTM',
        details: `Developing a mobile application for CTM's maintenance workshop`,
        more: 'The application consists on the digitalization of the monitoring of the different workshop in the maintenance workflow of CTM buses.',
        technologies: 'SQL Server 2012, Ionic, NodeJS',
        class: 'fa fa-graduation-cap'
      }
    ]
  },
  {
    date: '2015 - 2016',
    contents: [
      {
        id: 'comm_cs',
        title: 'Head of communication and media unit of the Social Club EHTP'
      },
      {
        id: 'hitc',
        title: 'Founder / Vice-President of the Hassania IT Club',
        details: 'Organizing the 1<sup>st</sup> edition of the national programming contest CODE IT.',
        class: 'fa fa-flask'
      },
      {
        id: 'forum',
        title:
          'Member of the design unit of the organizing committee of the EHTP-Entreprises Forum XIX<sup>th</sup> edition"',
        details: 'Designing posters, banners, notepad cover and the backdrop of the event.',
        class: 'fa fa-flask'
      },
      {
        id: 'jnjd10',
        title: 'Participating in the programming competition - JNJD 10th edition',
        details: 'Ranked 5<sup>th</sup>, Java',
        class: 'fa fa-flask'
      },
      {
        id: 'ehtpweb',
        title: 'Web project',
        details: 'Renovating and restructuring the EHTP website',
        technologies: 'WordPress, HTML5, CSS3, JavaScript',
        class: 'fa fa-graduation-cap'
      },
      {
        id: 'codejam',
        title: 'Participating in Google Code Jam',
        details: 'Qualified to Round1, Java',
        class: 'fa fa-flask'
      },
      {
        id: 'compiler',
        title: 'Compiler project',
        details: 'Implementing a compiler (lexical, syntactic and semantic analysis) using in C++',
        class: 'fa fa-graduation-cap'
      }
    ]
  },
  {
    date: '2014 - 2015',
    contents: [
      {
        id: 'cs',
        title: 'Member of the Social Club EHTP',
        details: 'Designing posters, banners, flyers, reports and developing the socialehtp website.',
        class: 'fa fa-flask'
      },
      {
        id: 'pip',
        title: 'Organizing a musical event in EHTP',
        details:
          'As part of the Personal Initiative Project, and thanks to our sponsors, we made a conference, an artistic exhibition and a concert.',
        class: 'fa fa-flask'
      },
      {
        id: 'jnjd9',
        title: 'Participating in the programming competition - JNJD 9<sup>th</sup> edition',
        details: 'Ranked 13<sup>th</sup>, C',
        class: 'fa fa-flask'
      },
      {
        id: 'codejam',
        title: 'Participating in Google Code Jam',
        details: 'Qualified to Round1, C',
        class: 'fa fa-flask'
      },
      {
        id: '2dgame',
        title: 'C project',
        details: 'Designing and implementing a 2D video game using the SDL library in C.',
        class: 'fa fa-graduation-cap'
      }
    ]
  },
  {
    date: 'Previous achievements',
    contents: [
      {
        id: 'inptprepa',
        title:
          'Winner of the 1<sup>st</sup> prize of the programming competition held in INPT for students of the preparatory classes'
      },
      {
        id: 'bloggerexp',
        title: 'Foundation and administration of a VBulletin forum',
        details: 'Bloggerexp is an arabic forum dedicated to users of the platform Blogger offered by Google.',
        class: 'fa fa-flask'
      },
      {
        id: 'khamsat',
        title: 'Design services and websites development via Khamsat platform'
      }
    ]
  }
];
