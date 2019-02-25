import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
route:Router;

  constructor(router: Router, private authservice: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    debugger
    const currentUser: boolean = this.authservice.getLoggedindata();
    if (currentUser)
      return true;
    else {
      this.route.navigate(['', 'login']);
      return false;
    }
  }
}
