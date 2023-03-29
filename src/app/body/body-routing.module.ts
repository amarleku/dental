import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingpageComponent } from "./components/landingpage/landingpage.component";
import { LoginComponent } from "../core/components/login/login.component";
import { BusniessComponent } from "./components/busniess/busniess.component";
import { AboutComponent } from "./components/about/about.component";

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'business', component: BusniessComponent },
  {path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent },
];

@NgModule ({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
