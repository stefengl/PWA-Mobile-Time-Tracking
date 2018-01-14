import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase/app';
import { ILoginModel } from '../models/interfaces/i-login.model';

@Injectable()
export class AuthenticationService {


  user: User = null;

  constructor(
    private http: HttpClient,
    private fireAuth: AngularFireAuth,
    private router: Router) {

    this.handleAuthChange();
  }

  handleAuthChange(): void {
    this.fireAuth.auth.onAuthStateChanged((user: User) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }

  public authenticate(model: ILoginModel): Promise<any> {
    return this.fireAuth.auth.signInWithEmailAndPassword(model.email, model.password);
  }

  public register(model: ILoginModel): Promise<any> {
    return this.fireAuth.auth.createUserWithEmailAndPassword(model.email, model.password);
  }

  public logout(): Promise<any> {
    return this.fireAuth.auth.signOut();
  }

}
