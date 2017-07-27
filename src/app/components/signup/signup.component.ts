import { Component } from '@angular/core';
import { UserServices } from "../../services/userServices/user.services";
//import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'signup',
  //template: `<h1>Hello </h1>`,
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
  providers: [UserServices]
  //styles: [`input.ng-invalid {border-left: 5px solid red} input.ng-valid {border-left: 5px solid green}`]
})

export class SignupComponent  { 
    constructor( private userService:UserServices) { 
    }
    onSignup(value:Object){
        this.userService.register(value);
    }
    
    
    /*productForm= new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(1)]),
      userName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      email: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),  
  });*/
  
 }
