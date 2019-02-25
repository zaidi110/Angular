import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { model } from './model';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  model: any = {};
  msg: string
  // firstName: string;
  // lastName: string;
  // email: string;
  // mobile: string;
  // password: string;
  // confirmPassword: string;
  gender = '';
  constructor(private serviceObj: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    //debugger
    //alert('Hi...')
    //alert('hiiiiii' + JSON.stringify(this.model));
    if (this.model.password != this.model.confirmPassword) {
      this.msg = "Password does not match!, try again"
      return;
    }

    this.serviceObj.setUserData(this.model);
    this.msg = "You have successfully registered!, redirect to login form."
    this.router.navigate(['', 'login']);


    //alert('hiiiiii ' + JSON.stringify(this.serviceObj.getUserData()));
  }

}
