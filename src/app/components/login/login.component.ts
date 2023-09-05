import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  accessToken !: string;
  constructor(public authService: AuthService) {

  }
  handleLoginClick(){
    if(this.authService.isLoggedIn){
      this.authService.logOut()
    }
    else {
      this.authService.login()
    }
    console.log(this.authService.isLoggedIn)
  }
  handleAccessTokenClick(){
    this.accessToken = this.authService.getAccessToken()
    console.log(this.accessToken)
  }

}
