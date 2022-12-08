import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email = ""
  password = ""

  constructor(private router: Router) { }

  readValue = () => {
    let data: any = {
      "email": this.email,
      "password": this.password
    }
    console.log(data)

    if (this.email == "user" && this.password == "12345") {
      this.router.navigate(['/search2'])
    } else {
      alert("invalid login")
    }

  }
}
