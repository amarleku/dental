import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './body/components/landingpage/landingpage.component';
import { BusniessComponent } from './body/components/busniess/busniess.component';
import { StudentsComponent } from './body/components/students/students.component';
import { StudentsOverviewComponent } from './body/components/students-overview/students-overview.component';
import { AuthGuardGuard } from './core/guards/auth-guard.guard';
import { ResetPwdComponent } from './core/components/reset-pwd/reset-pwd.component';
import { AboutComponent } from './body/components/about/about.component';
import { Error404Component } from './core/components/error404/error404.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./body/body.module').then((m) => m.BodyModule),
  },
  {
    path: '',
    component: LandingpageComponent,
    pathMatch: 'full',
  },
  {
    path: 'business',
    component: BusniessComponent,
    pathMatch: 'full',
  },
  {
    path: 'talent',
    component: StudentsComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
  },
  {
    path: 'std-overview',
    component: StudentsOverviewComponent,
    pathMatch: 'full',
  },
  {
    path: 'reset-pwd',
    component: ResetPwdComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
