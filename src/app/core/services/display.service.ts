import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  displayStudentTable: boolean = true;
  displayBusinessDataTable: boolean = true;

  displayStudentChartCheck: boolean = true;
  displayBusinessChartCheck: boolean = false;

  constructor() { }

  displayStudentsTable(): boolean {
    // Toggling Through the Charts
    this.displayStudentChartCheck = true;
    this.displayBusinessChartCheck = false;

    // Toggling Through the Data Table
    this.displayStudentTable = true;
    this.displayBusinessDataTable = false;

    return this.displayStudentChartCheck;
  }

  displayBusinessTable(): boolean {
    //Toggling Through the Charts
    this.displayBusinessChartCheck = true;
    this.displayStudentChartCheck = false;

    // Toggling Through the Data Table
    this.displayBusinessDataTable = true;
    this.displayStudentTable = false;

    return this.displayBusinessChartCheck;
  }

}
