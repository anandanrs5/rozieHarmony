import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {} 
  

  adminForm=new FormGroup({
    default_work_area:new FormControl<any>(null,[Validators.required,Validators.pattern("^[a-z0-9]{2,15}$")]),
    })
  get default_work_area(){
    return this.adminForm.get('default_work_area');
  }

} 
