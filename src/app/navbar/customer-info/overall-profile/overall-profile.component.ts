import { Component, OnInit } from '@angular/core';
import { CustomerProfile } from 'src/app/model/customerProfile';
import { ProfileService } from 'src/app/profile.service';
import { MainserviceService } from '../../../mainservice.service';
import { Customer } from '../../../model/Customer.model';
// ../../model/Customer.model

@Component({
  selector: 'app-overall-profile',
  templateUrl: './overall-profile.component.html',
  styleUrls: ['./overall-profile.component.css']
})
export class OverallProfileComponent implements OnInit {

  constructor(private pro_service :ProfileService,private service:MainserviceService) { }
  profileDetails!:CustomerProfile;
  ngOnInit(): void {
   this.customerInfo=this.service.authendicatedUser();
   this.profileDetails=this.pro_service.profileData;
   console.log(this.profileDetails);
  }
  customerInfo!:Customer;
  }
