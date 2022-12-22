import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LeftSectionComponent } from './left-section/left-section.component';
import { OverallProfileComponent } from './navbar/customer-info/overall-profile/overall-profile.component';
import { ProfileFormComponent } from './navbar/customer-info/profile-form/profile-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RightSectionComponent } from './right-section/right-section.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';

const routes: Routes = [
  { path:'viewmore' ,component:OverallProfileComponent},
  { path:'home' ,component:HomeComponent},
  { path:'' ,component:HomepageComponent},
  { path:'sidebar' ,component:SideNavbarComponent},
  { path:'navbar' ,component:NavbarComponent},
  { path:'rightcomponent' ,component:RightSectionComponent},
  { path:'leftcomponent' ,component:LeftSectionComponent},
  { path:'profileform' ,component:ProfileFormComponent},]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
   
 }
