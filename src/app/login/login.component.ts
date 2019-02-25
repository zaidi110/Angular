import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  msg: string
  model:any=[]
  loginForm: FormGroup;
  submitted = false;

  // username: string = "shabi@netprophetsglobal.com";
  // password: string = "123456";

  constructor(private formBuilder: FormBuilder, private router: Router, private serviceObj: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  Login() {
    this.submitted = true;
    if(this.loginForm.invalid)
    return;
    debugger
    this.model=this.serviceObj.getUserData()
    
    //alert(this.loginForm.value.email+""+this.loginForm.value.password);
    //alert(this.model[0].password)
    //return

    //alert(this.authService.getUserData().email)
    //alert(this.authService.getUserData().password)

    if ((this.loginForm.value.email == this.model[0].email)
      && (this.loginForm.value.password== this.model[0].password)) {
      this.serviceObj.setLoggedinData();
      //alert("You have logged in successfully...");
      //this.msg = "You have logged in successfully..."
      this.router.navigate(['', 'dashboard']);
    }

    else
      this.msg = "User name or password is incorrect!"
    //alert("User name or password is incorrect!");
  }
}
