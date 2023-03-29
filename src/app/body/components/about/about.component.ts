import { Component, OnInit } from '@angular/core';
import { AboutLecturers } from '../../model/aboutLecturers';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  testimonialsCarusel: any[] = [];

  lecturers: AboutLecturers[] = [];

  constructor() {}
  pattern = ``;

  ngOnInit(): void {
    this.lecturers = [
      {
        image: 'Fabiola',
        name: 'Fabiola Duro',
        profile: 'https://www.linkedin.com/in/fabioladuro/',
      },
      {
        image: 'Kristi',
        name: 'Kristi Qorri',
        profile: 'https://www.linkedin.com/in/kristiqorri/',
      },
      {
        image: 'Majlinda',
        name: 'Majlinda Bara',
        profile: 'https://www.linkedin.com/in/majlindabara/',
      },
    ];

    this.testimonialsCarusel = [
      {
        title: 'Why is this program important?',
        description: `IMAA Innovation Academy: In order to remain impartial to the change, we all need to embrace by initiate change.That is why this program is carefully planned by tailor- made to fit the needs of  corporates who are part of the innovation ecosystem in Albania, thus helping them build their innovation capabilities within. IMAA Talent Acquisition: It is a matchmaking job opportunity between ICT students by ICT companies in Albania by WB6 countries, accompanied by a set of tools as a training system that incorporates lectures, educational curricula, training, by workshops, aiming to build the soft skills capability tomanage young generations, freelancers, switch carriers, talent acquisitions in innovation through ICT  by digital inclusion.`,
        image: '2',
      },
      {
        title: 'Who should take part?',
        description: `IMAA Innovation Academy program is intended for a selected group of participants, who are or are aiming to become:
        • Intrapreneurs: launching by leading new ventures, making ideas happen, building products or services;
        • Innovation Managers: responsible for innovation programs, innovation initiatives, by the teams gathered around them, innovation functions or units;
        • Innovation Leaders: responsible for innovation strategy, innovation ecosystem, performance, by budget.
        IMAA Talent Acquisition is a platform aiming to matchmake the needs of the corporate with the right talents.
        • Corporates: Intending to position themselves as an attractive destination for talent by how they plan to source, assess, employ, by bring on board the young generations to respond to market employment needs in Albania in the ICT sector:
        • Talents: Youngsters who are interested in advancing their skills by can identify themselves with certain required values by thrive working in a fast-paced by intellectually intense environment.`,
        image: '1',
      },
      {
        title: 'Our Innovation Academies Implementation',
        description: `IMAA Innovation Academy, the boot-camp-style program introduces:
        • Shared understbying of how to manage innovation in corporations.
        • Principles, tools, by methods to strengthen the innovation capabilities of the people by teams who deal with innovation.
        • New business model design by innovation practices.
        • Ways to create a better entrepreneurial environment for those who want a chance to turn ideas into businesses, that way changing their organization for the better.
        • Soft Skills training to identify your strengths by weaknesses by how to use them to project a positive as well as confident image in both personal by professional aspects of life.
        • Opportunities to exchange experiences by good practices with peers who are on the same mission, albeit in a different company by industry.`,
        image: '3',
      },
      {
        title: 'Curricula',
        description: `
        • Corporate Innovation for Intrapreneurs
        • Startups Innovation
        • Digital transformation
        • Innovation in Green Digital Transition & Sustainability on Corporate
        • Social Responsibility
        • Impacts (CSR)
        • Leadership Coaching on Systematic Team Approaches techniques
        • Digital Marketing / Communication Strategies
        • Supply Chain Development - Practices & Procedures
        • Financial management for startups
        • Project Management
        • ICT Soft Skills (12 modules)
        `,
        image: '4',
      },
    ];
  }
}
