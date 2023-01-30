import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/mainservice.service';
@Component({
  selector: 'app-customer-status',
  templateUrl: './customer-status.component.html',
  styleUrls: ['./customer-status.component.css']
})
export class CustomerStatusComponent implements OnInit {

  constructor(private service :MainserviceService) { }

status:string[]=['Available','In a Meeting','Not Ready','Queue-work','Email-work','At a Training','Email-work'
,'At a Training','At Lunch','Technical IssueAvailable','On Break','Offline Activity','Special Assignment'
,'Reading Time','test-K','Outbound Call','Logout--'];

  ngOnInit(): void {
  }
  userName=this.service.username;

  selected_data:string='login';

   selected(){
    console.log(this.selected_data)
   }
}
