import { Component, OnInit } from '@angular/core';

import { DisplayService } from "../../services/display.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private displayService: DisplayService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {}

  displayStudents() {
    this.displayService.displayStudentsTable();
  }

  displayBusiness() {
    this.displayService.displayBusinessTable();
  }

  logout() {
    this.authService.signOutHandler().then(() => {
      this.router.navigate(['']);
      });
    }
}
