import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  action!:string;
  arrow:boolean=true;

   responsive(param:string){
    this.action=param;
   this.arrow=!this.arrow;
    }
}
