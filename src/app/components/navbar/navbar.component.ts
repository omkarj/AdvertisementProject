import { Component } from '@angular/core';
import { UserServices } from "../../services/userServices/user.services";

@Component({
  selector: 'navbar',
  //template: `<h1>Hello </h1>`,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
   providers: [UserServices]
})
export class NavbarComponent  {

    constructor( private userService:UserServices) { 
    }
    onLogin(value:Object){
        this.userService.login(value).subscribe((data) => {
                console.log(data);
            });
        console.log(this.userService.authToken)
    }

    onSignup(value:Object){
        this.userService.register(value);
        
    }

  }
