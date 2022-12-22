import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/mainservice.service';
import { Customer } from '../../model/Customer.model';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  customersInfo!:Customer;

  constructor( private service:MainserviceService) { }

  ngOnInit(): void {
   this.customersInfo =this.service.authendicatedUser();
    }
  
  }



