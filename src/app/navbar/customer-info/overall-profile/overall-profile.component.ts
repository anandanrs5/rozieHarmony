import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../../../mainservice.service';
import { Customer } from '../../../model/Customer.model';
// ../../model/Customer.model

@Component({
  selector: 'app-overall-profile',
  templateUrl: './overall-profile.component.html',
  styleUrls: ['./overall-profile.component.css']
})
export class OverallProfileComponent implements OnInit {

  constructor(private service :MainserviceService) { }
  profileDetails!:{};
  ngOnInit(): void {
   this.customerInfo=this.service.authendicatedUser();
   this.profileDetails=this.service.profileData;
  //  console.log(this.profileDetails.va)
  }
  customerInfo!:Customer;
  


  

}
