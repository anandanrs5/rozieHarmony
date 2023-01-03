import { Injectable } from '@angular/core';
import { CustomerProfile } from './model/customerProfile';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor() { }
  //transfer data to overall-profile components.ts
  profileData:CustomerProfile={
    profile:
        { title:'',     lastname:'',language:'',firstname:'',
          middlename:'',Gender:'',  dob:'',     ivr_pin_status:'',email:''},
    phone:
        { m_countrycode:'',h_countrycode:'',o_countrycode:'',mobilenumber:'', 
          homenumber:'',   officenumber:''},
    address:
        { choose:'',   address1:'', address2:'',state:'',zipcode:'',
          country:'',  company:''  ,city:''}
    }
  saveDataInServive(customerInformation:any){
    //profile information
    this.profileData.profile.title       = customerInformation.value.profile.title;
    this.profileData.profile.firstname   = customerInformation.value.profile.firstname;
    this.profileData.profile.lastname    = customerInformation.value.profile.lastname;
    this.profileData.profile.middlename  = customerInformation.value.profile.middlename;
    this.profileData.profile.Gender      = customerInformation.value.profile.Gender;
    this.profileData.profile.language    = customerInformation.value.profile.language;
    this.profileData.profile.dob         = customerInformation.value.profile.dob;
this.profileData.profile.ivr_pin_status  = customerInformation.value.profile.ivr_pin_status;
    this.profileData.profile.email       = customerInformation.value.profile.email;
    //phone informti
    this.profileData.phone.h_countrycode = customerInformation.value.phone.h_countrycode;
    this.profileData.phone.m_countrycode = customerInformation.value.phone.m_countrycode;
    this.profileData.phone.o_countrycode = customerInformation.value.phone.o_countrycode;
    this.profileData.phone.homenumber    = customerInformation.value.phone.homenumber;
    this.profileData.phone.mobilenumber  = customerInformation.value.phone.mobilenumber;
    this.profileData.phone.officenumber  = customerInformation.value.phone.officenumber;
    //addes
    this.profileData.address.address1    = customerInformation.value.address.address1;
    this.profileData.address.address2    = customerInformation.value.address.address2;
    this.profileData.address.choose      = customerInformation.value.address.choose;
    this.profileData.address.city        = customerInformation.value.address.city;
    this.profileData.address.company     = customerInformation.value.address.company;
    this.profileData.address.country     = customerInformation.value.address.country;
    this.profileData.address.state       = customerInformation.value.address.state;
    this.profileData.address.zipcode     = customerInformation.value.address.zipcode;
  }
}

