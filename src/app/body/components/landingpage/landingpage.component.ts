import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent implements OnInit {
  testimonials: any = [];

  screenWidth: number;
  clientsDisplay: boolean = true;
  showMore: boolean = false;
  btnText: string = 'Load More';

  lecturers: any;
  testimonialsCarusel: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.lecturers = [
      {
        image: 'Afonso',
        profile: 'https://www.linkedin.com/in/afonsors/',
      },
      {
        image: 'Andrija',
        profile: 'https://www.linkedin.com/in/andrijazvicer/',
      },
      {
        image: 'Fabiola',
        profile: 'https://www.linkedin.com/in/fabioladuro/',
      },
      {
        image: 'Gjergji',
        profile: 'https://www.linkedin.com/in/gjergjiguri',
      },

      {
        image: 'Herjola',
        profile: 'https://www.linkedin.com/in/herjolaspahiu',
      },
      {
        image: 'Kristi',
        profile: 'https://www.linkedin.com/in/kristiqorri/',
      },
      {
        image: 'Linda',
        profile: 'https://www.linkedin.com/in/linda-dervishaj',
      },
      {
        image: 'Luka',
        profile: 'https://www.linkedin.com/in/lukaprisunjak/',
      },
      {
        image: 'Mireda',
        profile: 'https://www.linkedin.com/in/mireda-thana',
      },
      {
        image: 'Majlinda',
        profile: 'https://www.linkedin.com/in/majlindabara/',
      },
      {
        image: 'Vladimir',
        profile: 'https://www.linkedin.com/in/vladimirvulic/',
      },
    ];
    this.testimonialsCarusel = [
      {
        name: 'Alfonso Rabelo',
        description: `“I have always been a believer that the best time to invest in the unknown is in times of uncertainty. I
        am aware this statement bears risk, however, if businesses are forced to reinvent themselves - shouldn&#39;t
        we look differently at our customer, market, by revenue landscape? That's what the Innovation
        Management Academy Albania (IMAA) is all about: it’s a series of hands-on workshops, demonstrating
        that corporates have both the talent by the assets to identify new opportunities by reinvent their
        business models more quickly than anyone else. “ – Alfonso Rebelo de Sousa`,
        image: 'testifyPerson1',
      },
      {
        name: 'Erli Imeraj',
        description: `“I enjoyed the speakers by all the information on Creativity, Design Thinking, Agile Development they
        provided. The instructions are very engaging in their presentation by the content is great. This was as
        well put together by I found this to be an amazing experience of new learning“; - Erlin Imeraj - Data
        Warehouse Reporting Manager, NOA I.F`,
        image: 'Erli-Imeraj',
      },
      {
        name: 'Regina Scala',
        description: `"Innovation in itself is a very important aspect in the development of a business by through Innovation
        Management Academy Albania (IMAA) I managed to think of a series of practices that can be applied in
        my current job position. Thank you, IMAA! ” – Regina Sala, Century 21`,
        image: 'Rexhina-Sala',
      },
      {
        name: 'Mireda Thana',
        description: `“I am a firm believer that each human being is extremely powerful, unique, by totally capable of any
        achievement. I look forward to accompanying the IMAA participants to the most transformative by
        meaningful journey of their lives.” – Mireda Thana, Team Performance by Leadership Coach`,
        image: 'Mireda-Thana',
      },
    ];
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 500) {
      this.clientsDisplay = false;
    }
  }

  loadMore() {
    this.showMore = !this.showMore;
    if (this.showMore) {
      this.btnText = 'Show less';
    } else {
      this.btnText = 'Load more';
    }
  }

  about() {
    this.router.navigate(['/about']);
  }

  students(){
    this.router.navigate(['/talent']);
  }
  bussniess(){
    this.router.navigate(['/business'])
  }
}
