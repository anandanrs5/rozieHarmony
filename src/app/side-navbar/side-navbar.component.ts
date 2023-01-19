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
  action:string="shrinked";
  arrow:boolean=false;

  responsive(param:string){
    this.action=param;
    console.log(this.action);
    setTimeout(() => {
      this.arrow=!this.arrow;
    }, 70);
    
  }    
}

 