import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  name=""
  address=""
  phone=""
  email=""
  password=""
  confirm=""
  constructor(private api:ApiService){}
  readValue=()=>
    {
      let data:any={ "name":this.name,"address":this.address,"phone":this.phone,"email":this.email,"password":this.password
    ,"confirm":this.confirm}
    console.log(data)
    this.api.addUser(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        
      }
    )
  }
}
