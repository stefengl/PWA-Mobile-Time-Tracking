import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { LoginModel } from '../../shared/models/login.model';
import { AuthenticationService } from '../../shared/provider/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = {
    email: 'stef.engl.se@gmail.com',
    password: 'Affe1234'
  };

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private snackbar: MatSnackBar) { }

  ngOnInit() { }


  public authenticate(): void {
    this.auth.authenticate(this.loginModel)
      .then(() => this.toHome())
      .catch((err) => console.log(err.code));
  }

  public toRegistration(): void {
    this.router.navigate(['/registration']);
  }

  public toHome(): void {
    this.snackbar.open('You are authenticated', '', {
      duration: 1000
    }).afterDismissed().subscribe(() => {
      this.router.navigate(['/tabs']);
    });
  }

}
