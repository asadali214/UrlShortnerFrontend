import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { InfoDashboardComponent } from './info-dashboard/info-dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { ExpiryComponent } from './expiry/expiry.component';
import { NotExistComponent } from './not-exist/not-exist.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    InfoDashboardComponent,
    ExpiryComponent,
    NotExistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
