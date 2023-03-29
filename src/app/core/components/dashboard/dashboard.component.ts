import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../body/services/firestore.service';
import { Chart, registerables } from 'chart.js';

import { DisplayService } from '../../services/display.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  businessList: any[] = [];
  totalBusiness: number;
  studentList: any[] = [];
  totalStudents: number;

  emailAddress: string;

  studentsLineData: any = [];
  businessLineData: any = [];

  constructor(
    private firestore: FirestoreService,
    private fireAuth: AngularFireAuth,
    public displayService: DisplayService
  ) {
    Chart.register(...registerables);
  }

  //Skills Counting for chart data
  javaStudentCount: number = 0;
  javaBusinessCount: number = 0;

  phpStudentCount: number = 0;
  phpBusinessCount: number = 0;

  netStudentCount: number = 0;
  netBusinessCount: number = 0;

  javaScriptStudentCount: number = 0;
  javaScriptBusinessCount: number = 0;

  angularStudentCount: number = 0;
  angularBusinessCount: number = 0;

  reactStudentCount: number = 0;
  reactBusinessCount: number = 0;

  vueJSStudentCount: number = 0;
  vueJSBusinessCount: number = 0;

  flutterStudentCount: number = 0;
  flutterBusinessCount: number = 0;

  otherStudentCount: number = 0;
  otherBusinessCount: number = 0;

  ngOnInit(): void {
    console.log('Student', this.displayService.displayStudentChartCheck);
    console.log('Business', this.displayService.displayBusinessChartCheck);
    this.fireAuth.authState.subscribe((data) => {
      this.emailAddress = data.email;
    });

    this.firestore
      .getBusinessValues()
      .forEach((data) => {
        data.forEach((element) => {
          this.businessList.push(element.data());
          this.totalBusiness = data.size;
        });
      })
      .then(() => {
        for (let i = 0; i < this.businessList.length; i++) {
          if (this.businessList[i].skill.includes('Java')) {
            this.javaBusinessCount += 1;
          }
          if (this.businessList[i].skill.includes('PHP')) {
            this.phpBusinessCount += 1;
          }
          if (this.businessList[i].skill.includes('.NET')) {
            this.netBusinessCount += 1;
          }
          if (this.businessList[i].skill.includes('JavaScript')) {
            this.javaScriptBusinessCount += 1;
          }
          if (this.businessList[i].skill.includes('Angular')) {
            this.angularBusinessCount += 1;
          }
          if (this.businessList[i].skill.includes('React')) {
            this.reactBusinessCount += 1;
          }
          if (this.businessList[i].skill.includes('Vue.js')) {
            this.vueJSBusinessCount += 1;
          }
          if (this.businessList[i].skill.includes('Flutter')) {
            this.flutterBusinessCount += 1;
          }
          if (this.businessList[i].skill.includes('Other')) {
            this.otherBusinessCount += 1;
          }
        }
        this.businessLineChart();
      });

    this.firestore
      .getStudentValues()
      .forEach((data) => {
        data.forEach((element) => {
          this.studentList.push(element.data());
          this.totalStudents = data.size;
        });
      })
      .then(() => {
        for (let i = 0; i < this.studentList.length; i++) {
          if (this.studentList[i].skills.includes('Java')) {
            this.javaStudentCount += 1;
          }
          if (this.studentList[i].skills.includes('PHP')) {
            this.phpStudentCount += 1;
          }
          if (this.studentList[i].skills.includes('.NET')) {
            this.netStudentCount += 1;
          }
          if (this.studentList[i].skills.includes('JavaScript')) {
            this.javaScriptStudentCount += 1;
          }
          if (this.studentList[i].skills.includes('Angular')) {
            this.angularStudentCount += 1;
          }
          if (this.studentList[i].skills.includes('React')) {
            this.reactStudentCount += 1;
          }
          if (this.studentList[i].skills.includes('Vue.js')) {
            this.vueJSStudentCount += 1;
          }
          if (this.studentList[i].skills.includes('Flutter')) {
            this.flutterStudentCount += 1;
          }
          if (this.studentList[i].skills.includes('Other')) {
            this.otherStudentCount += 1;
          }
        }
        this.studentsLineChart();
      });
  }

  businessLineChart() {
    this.businessLineData = new Chart('lineDataChart1', {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Skill Occurrence',
            data: [
              this.javaBusinessCount,
              this.phpBusinessCount,
              this.netBusinessCount,
              this.javaScriptBusinessCount,
              this.angularBusinessCount,
              this.reactBusinessCount,
              this.vueJSBusinessCount,
              this.flutterBusinessCount,
              this.otherBusinessCount
            ],
            backgroundColor: '#237a7fad',
            fill: true,
            showLine: false,
            pointRadius: 5,
            tension: 0.5,
          },
        ],
        labels: [
          'Java',
          'PHP',
          '.NET',
          'JavaScript',
          'Angular',
          'React',
          'Vue.JS',
          'Flutter',
          'Other'
        ],
      },
    });
  }

  studentsLineChart() {
    this.studentsLineData = new Chart('lineDataChart2', {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Skill Occurrence',
            data: [
              this.javaStudentCount,
              this.phpStudentCount,
              this.netStudentCount,
              this.javaScriptStudentCount,
              this.angularStudentCount,
              this.reactStudentCount,
              this.vueJSStudentCount,
              this.flutterStudentCount,
              this.otherStudentCount
            ],
            backgroundColor: '#237a7fad',
            fill: true,
            showLine: false,
            pointRadius: 5,
            tension: 0.5,
          },
        ],
        labels: [
          'Java',
          'PHP',
          '.NET',
          'JavaScript',
          'Angular',
          'React',
          'Vue.JS',
          'Flutter',
          'Other'
        ],
      },
    });
  }
}
