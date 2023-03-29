import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { BodyRoutingModule } from './body-routing.module';
import { CoreModule } from "../core/core.module";
import { StudentsOverviewComponent } from './components/students-overview/students-overview.component';
import { StudentsComponent } from './components/students/students.component';
import { BusniessComponent } from './components/busniess/busniess.component';
import { SharedModule } from '../shared/shared.module';

// Services
import { FirestoreService } from "./services/firestore.service";

// Prime Ng Modules
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ChipsModule } from "primeng/chips";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { AvatarModule } from 'ngx-avatar';
import { MultiSelectModule } from "primeng/multiselect";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
 import {MessagesModule} from "primeng/messages";
import {CarouselModule} from "primeng/carousel";
import { AboutComponent } from './components/about/about.component';


@NgModule({
    declarations: [
        LandingpageComponent,
        StudentsComponent,
        BusniessComponent,
        StudentsOverviewComponent,
        AboutComponent,
    ],
    imports: [
        CommonModule,
        TableModule,
        BodyRoutingModule,
        CardModule,
        InputTextModule,
        ChipsModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        CoreModule,
        AvatarModule,
        MultiSelectModule,
        BrowserAnimationsModule,
        MessagesModule,
        CarouselModule
    ],
    exports: [
        StudentsOverviewComponent
    ],
    providers: [
        FirestoreService
     ]
})
export class BodyModule { }
