import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../provider/authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const user = this.auth.user;
    let isAuthenticated : boolean = (user) ? true : false;

    if(isAuthenticated){
      return true;
    }

    this.router.navigate([''])
    return false;
  }
  
}
