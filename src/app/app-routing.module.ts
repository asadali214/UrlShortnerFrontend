import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoDashboardComponent }   from './info-dashboard/info-dashboard.component';
import { LandingComponent }   from './landing/landing.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'dashboard/:id', component: InfoDashboardComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}