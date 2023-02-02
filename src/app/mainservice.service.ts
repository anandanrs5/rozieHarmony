import { Injectable } from '@angular/core';
import { Customer } from './model/Customer.model';
import {  CustomerProfile } from './model/customerProfile'
@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
constructor() { }
  username='Anandan';
  authenticated:boolean=false;
  profileFormAuth:boolean=false;
    
  authUser:Customer={ id:'',name:'',email:'',ph_no:'',country_code:'',
                      Lang_Pref:'',Gender:'',Address:'',DOB:'',IVR_pin_Sts:'' };

  authCustomer( customer_id   :string, customer_name         :string, customer_email :string,
                customer_ph_no:string, customer_country_code :string, Lang_Pref      :string,
                Gender        :string, Address               :string, DOB            :string, 
                IVR_pin_Sts   :string )
                { 
                  this.authUser.id           = customer_id;
                  this.authUser.name         = customer_name;
                  this.authUser.email        = customer_email;
                  this.authUser.ph_no        = customer_ph_no;
                  this.authUser.country_code = customer_country_code;
                  this.authUser.Lang_Pref    = Lang_Pref;
                  this.authUser.Gender       = Gender;
                  this.authUser.Address      = Address;
                  this.authUser.DOB          = DOB;
                  this.authUser.IVR_pin_Sts  = IVR_pin_Sts; 

                  // this.authenticated=true;
                }
  authendicatedUser(){
            
            return this.authUser;}

    customerList=[
        {id          :'114091648',name   :'Mathew',email :'mathew123@gmail.com',ph_no :'12344466',
         country_code:'123426',Lang_Pref :'English',DOB  :'11-2-1970',          Gender:'Male',
         IVR_pin_Sts :'valid', Address   :'34, 3rd-cross Toronto ,UK'},

        {id          :'114091649',   name:'John',   email:'john123@gmail.com',   ph_no:'12334454',
         country_code:'133442',Lang_Pref :'English',  DOB:'11-2-1970',          Gender:'Male',IVR_pin_Sts:'valid',
         Address     :'34, 3rd-cross Toronto ,USA'},

        {id          :'114091650',   name:'Max',    email:'max123@gmail.com',     ph_no:'12222222',
         country_code:'174252', Lang_Pref:'English',  DOB:'11-2-1970',           Gender:'Male',IVR_pin_Sts:'valid', 
         Address     :'34, 3rd-cross Toronto ,USA'},

        {id          :'114091651',   name:'Josh',   email:'josh123@gmail.com',    ph_no:'11112222',
        country_code :'134000', Lang_Pref:'English',  DOB:'11-2-1970',           Gender:'Male',IVR_pin_Sts:'valid', 
        Address      :'34, 3rd-cross Toronto ,USA'},

        {id          :'114091652',   name:'Tony',   email:'Tony@gmail.com',       ph_no:'44442222',
        country_code :'134111', Lang_Pref:'English',  DOB:'11-2-1970',           Gender:'Male',IVR_pin_Sts:'valid',
         Address     :'34, 3rd-cross Toronto ,USA'},
 
        {id          :'114091653',   name:'James',   email:'James@gmail.com',     ph_no:'33331111',
        country_code :'134222', Lang_Pref:'English',   DOB:'11-2-1970',          Gender:'Male',IVR_pin_Sts:'valid',
        Address      :'34, 3rd-cross Toronto ,USA'}
          ] 
}     



