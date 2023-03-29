import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-students-overview',
  templateUrl: './students-overview.component.html',
  styleUrls: ['./students-overview.component.scss'],
})
export class StudentsOverviewComponent implements OnInit {
  @ViewChild('dt1') dt1!: Table;

  studentData: any[] = [];
  loading: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.loading = false;
    this.studentData = [
      {
        name: 'Name1',
        lastName: 'LastName1',
        tel: 2131245454,
        email: 'test@test1.com',
        skills: ['Java', ' PHP', ' Angular'],
        additionSkills: ['Linux'],
        employeeNo: 3,
        exp: 'None',
      },
      {
        name: 'Name2',
        lastName: 'LastName2',
        tel: 999992229911,
        email: 'test@test2.com',
        skills: ['Java', ' Python', ' React'],
        additionSkills: ['Linux'],
        employeeNo: 3,
        exp: 'None',
      },
    ];
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt1.filterGlobal(
      ($event.target as HTMLInputElement).value,
      'contains'
    );
  }
}
