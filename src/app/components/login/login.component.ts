import { Component } from '@angular/core';
import { UserServices } from "../../services/userServices/user.services";

@Component({
  selector: 'login',
  //template: `<h1>Hello </h1>`,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  providers: [UserServices]
})


export class LoginComponent  { 
    constructor( private userService:UserServices) { 
    }
    onLogin(value:Object){
        this.userService.login(value).subscribe((data) => {
                console.log(data);
            });
        //console.log(this.userService.authToken)
    }
}