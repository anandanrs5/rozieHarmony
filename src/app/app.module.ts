import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { HomeComponent } from './home/home.component';
import { RightSectionComponent } from './right-section/right-section.component';
import { LeftSectionComponent } from './left-section/left-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerLoginComponent } from './navbar/customer-login/customer-login.component';
import { CustomerInfoComponent } from './navbar/customer-info/customer-info.component';
import { CustomerStatusComponent } from './navbar/customer-status/customer-status.component';
import { MainserviceService } from './mainservice.service';
import { OverallProfileComponent } from './navbar/customer-info/overall-profile/overall-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileFormComponent } from './navbar/customer-info/profile-form/profile-form.component';
import { OverviewComponent } from './navbar/customer-info/overview/overview.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavbarComponent,
    HomeComponent,
    RightSectionComponent,
    LeftSectionComponent,
    CustomerLoginComponent,CustomerInfoComponent,CustomerStatusComponent, OverallProfileComponent, HomepageComponent, ProfileFormComponent, OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
