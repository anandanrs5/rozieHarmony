import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MainserviceService } from 'src/app/mainservice.service';
import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  constructor(private service :ProfileService) { }
  customerInformation!:FormGroup<any>;

  ngOnInit(): void {
    this.customerInformation= new FormGroup({
      profile:new FormGroup
      ({
        title   :new FormControl(null),
      lastname:new FormControl(null),
      language:new FormControl(null),
      firstname:new FormControl(null),
      middlename:new FormControl(null),
      Gender:new FormControl(null),
      dob:new FormControl(null),
      ivr_pin_status:new FormControl(null),
      email:new FormControl(null)
      }),
      phone:new FormGroup({
        m_countrycode:new FormControl(null),
        h_countrycode:new FormControl(null),
        o_countrycode:new FormControl(null),
        mobilenumber:new FormControl(null),
        homenumber:new FormControl(null),
        officenumber:new FormControl(null)
      }),
      address:new FormGroup({
        choose:new FormControl(null),
        address1:new FormControl(null),
        address2:new FormControl(null),
        state:new FormControl (null),
        zipcode:new FormControl(null),
        country:new FormControl(null),
        company:new FormControl(null),
        city:new FormControl(null)
      }),
      representative:new FormGroup({
        MRT:new FormControl(null),
        repo1:new FormControl(null),
        repo2:new FormControl(null),
        repo3:new FormControl(null),
        repo4:new FormControl(null),
      })

      
    })
  }
  mobile_country_code=[1246,77,367,94,13627,636,353,484,521,233,177,163,489,838,38383,8,51];

  
  save(){
    // console.log(this.customerInformation.value.profile.firstname); 
    // console.log(this.customerInformation.value.profile);
    this.service.saveDataInServive(this.customerInformation);
  }
  cancel(){

  }

  // this.bookForm=new FormGroup({
  //   'bookid':new FormControl(null,Validators.required),
  //   'bookname':new FormControl(null,Validators.required),
  //   'author':new FormControl(null,Validators.required),
  // })
}
