import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private service:MainserviceService) { }

  ngOnInit(): void {
  }
 profile(){
  this.service.profileFormAuth=true;
  console.log("success"+this.service.profileFormAuth);
  // this.service.authenticated=false;
 }

}
