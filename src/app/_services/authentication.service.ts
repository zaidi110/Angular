import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn: boolean = false;
  userdata: any=[];

  constructor() { }

  setLoggedinData() {
    this.isLoggedIn = true;
  }

  getLoggedindata() {
    return this.isLoggedIn;
  }

  setUserData(d) {
    this.userdata.push(d);
  }
  getUserData() {
    return this.userdata;
  }
}
