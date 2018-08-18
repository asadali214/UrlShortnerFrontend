import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoDashboardComponent }   from './info-dashboard/info-dashboard.component';
import { LandingComponent }   from './landing/landing.component';
import { ExpiryComponent } from './expiry/expiry.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'dashboard', component: InfoDashboardComponent },
  { path: 'expired', component: ExpiryComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}