import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from "primeng/table";
import { FirestoreService } from "../../../body/services/firestore.service";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import * as json2csv from "json2csv";

@Component({
  selector: 'app-business-overview',
  templateUrl: './business-overview.component.html',
  styleUrls: ['./business-overview.component.scss']
})
export class BusinessOverviewComponent implements OnInit {

  @ViewChild('dt1') dt1!: Table;

  businessData: any[] = [];
  dataStore: any[] = [];
  loading: boolean = true;

  date: Date = new Date();
  public csvFileName = `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}:${this.date.getHours()}-${this.date.getMinutes()}-${this.date.getSeconds()} Business List.csv`;

  constructor(private firestore: FirestoreService, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.firestore.getBusinessValues().forEach((data) => {
      data.forEach((element) => {
        this.dataStore.push(element.data());
        this.loading = false;
      });
    }).then(() => {
      this.loading = false;
      this.businessData = this.dataStore;
    });
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt1.filter(($event.target as HTMLInputElement).value, 'date', 'contains');
  }

  getCSVDownloadLink() {
    const date = new Date();
    return this.generateCSVDownloadLink({
      filename: `${date.getFullYear()} -${date.getMonth() + 1} -${date.getDate()}_${date.getHours()} -${date.getMinutes()} -${date.getSeconds()} _test.csv`,
      data: this.businessData,
      columns: ['NUIS', 'additionalSkill', 'companyName', 'describe', 'email', 'fullName', 'location', 'noOfEmployees', 'positionReq', 'skill', 'telephone'],
    });
  }

  public generateCSVDownloadLink(options: { filename: string, data: any, columns: string[] }): SafeUrl {
    const fields = options.columns;
    const opts = { fields, output: options.filename };
    const csv = json2csv.parse(options.data, opts);

    return this.domSanitizer.bypassSecurityTrustUrl('data:text/csv,' + encodeURIComponent(csv));
  }
}
