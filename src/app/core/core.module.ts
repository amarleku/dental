import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { CoreRoutingModule } from './core-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule } from "@angular/forms";

// Services
import {AuthService} from "./services/auth.service";

// Prime NG module imports
import { InputTextModule } from "primeng/inputtext";
import { TableModule } from "primeng/table";
import {SharedModule} from "../shared/shared.module";
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { StudentOverviewComponent } from './components/student-overview/student-overview.component';
import { BusinessOverviewComponent } from './components/business-overview/business-overview.component';
import { ResetPwdComponent } from './components/reset-pwd/reset-pwd.component';
import { Error404Component } from './components/error404/error404.component';

@NgModule({
    declarations: [
        LoginComponent,
        DashboardComponent,
        SidenavComponent,
        StudentOverviewComponent,
        BusinessOverviewComponent,
        ResetPwdComponent,
        Error404Component
    ],
    imports: [
        CommonModule,
        CoreRoutingModule,
        InputTextModule,
        ReactiveFormsModule,
        TableModule,
        SharedModule
    ],
    exports: [
        SidenavComponent
    ],
    providers: [
        AuthService
    ]
})
export class CoreModule { }
