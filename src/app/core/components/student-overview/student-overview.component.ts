import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from "primeng/table";
import { FirestoreService } from "../../../body/services/firestore.service";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import * as json2csv from "json2csv";

@Component({
  selector: 'app-student-overview',
  templateUrl: './student-overview.component.html',
  styleUrls: ['./student-overview.component.scss']
})
export class StudentOverviewComponent implements OnInit {

  @ViewChild('dt1') dt1!: Table;

  studentData: any[] = [];
  dataStore: any[] = [];
  loading: boolean = true;
  skills: any[] = [];
  skillList: any[] = [];

  date: Date = new Date();
  public csvFileName = `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}:${this.date.getHours()}-${this.date.getMinutes()}-${this.date.getSeconds()} Student List.csv`;

  constructor(private firestore: FirestoreService, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.firestore.getStudentValues().forEach((data) => {
      data.forEach((element) => {
        this.dataStore.push(element.data());
        this.loading = false;
      });
    }).then(() => {
      this.studentData = this.dataStore;
      this.loading= false;
    });
    this.firestore.getStudentValues().forEach((data) => {
      data.forEach((element) => {
        this.skills.push(element.data());
      });
    }).then(() => {
      for (let i = 0; i < this.skills.length; i++) {
        for (let j = 0; j < this.skills[i].skills.length; j++) {
          this.skillList.push(this.skills[i].skills[j].skill);
        }
      }
    });

  }

  applyFilterGlobal($event: any, stringVal: string) {
    this.dt1.filter(($event.target as HTMLInputElement).value, 'date', 'contains');
  }

  getCSVDownloadLink() {
    const date = new Date();
    return this.generateCSVDownloadLink({
      filename: `${date.getFullYear()} -${date.getMonth() + 1} -${date.getDate()}_${date.getHours()} -${date.getMinutes()} -${date.getSeconds()} _test.csv`,
      data: this.studentData,
      columns: [ 'firstName', 'lastName', 'position', 'skills', 'telephone','email', 'employeeNo', 'experience', 'additionSkills' ],
    });
  }

  public generateCSVDownloadLink(options: { filename: string, data: any, columns: string[] }): SafeUrl {
    const fields = options.columns;
    const opts = { fields, output: options.filename };
    const csv = json2csv.parse(options.data, opts);
    return this.domSanitizer.bypassSecurityTrustUrl('data:text/csv,' + encodeURIComponent(csv));
  }
}
