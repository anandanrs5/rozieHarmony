import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/mainservice.service';
@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private service :MainserviceService) { }
  ngOnInit(): void {
  }
   retrieve(customer_id:string){
      this.service.customerList.find( (element)=>{
      if(customer_id===element.id){
     this.service.authCustomer;
     (element.id,element.name,element.email,element.ph_no,element.country_code,element.Lang_Pref,element.Gender,
      element.Address,element.DOB,element.IVR_pin_Sts)
    }  
    })
  }     
  
  }

  


