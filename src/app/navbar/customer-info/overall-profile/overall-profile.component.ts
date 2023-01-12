import { Component, OnInit } from '@angular/core';
import { CustomerProfile } from 'src/app/model/customerProfile';
import { ProfileService } from 'src/app/profile.service';
import { MainserviceService } from '../../../mainservice.service';
import { Customer } from '../../../model/Customer.model';
import { profileInf } from 'src/app/profile.service';
@Component({
  selector: 'app-overall-profile',
  templateUrl: './overall-profile.component.html',
  styleUrls: ['./overall-profile.component.css']
})
export class OverallProfileComponent implements OnInit {

    constructor(private pro_service :ProfileService,private service:MainserviceService) { }
  
          ngOnInit(): void {
          this.customerInfo=this.service.authendicatedUser();
          this.profileDetails=this.pro_service.profileData;
          // this.profileObject=this.pro_service.p;
          this.Arr=this.pro_service.dataArr;
          console.log(this.profileObject+"success");
          // console.log(this.profileArray+"success");
          }
          
          customerInfo!:Customer;
          profileDetails!:CustomerProfile;
          profileObject!:profileInf;
          Arr!:profileInf[];
          

  }
