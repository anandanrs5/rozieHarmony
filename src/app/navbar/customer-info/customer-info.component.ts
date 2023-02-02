import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/mainservice.service';
import { Customer } from '../../model/Customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  customersInfo!:Customer;

  constructor( private service:MainserviceService , private router:Router) { }

  ngOnInit(): void {
   this.customersInfo =this.service.authendicatedUser();
    }
    hide:boolean=true;
    view(){
      // this.router.navigateByUrl('/viewmore');
      this.service.authenticated=true;
      this.hide=!this.hide;
    }
    viewless(){
      // this.router.navigateByUrl('/viewmore');
      this.service.authenticated=false;
      this.hide=!this.hide;
    }
  
  }



