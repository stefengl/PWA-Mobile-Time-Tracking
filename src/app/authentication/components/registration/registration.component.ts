import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { RegisterModel } from '../../shared/models/register.model';
import { AuthenticationService } from '../../shared/provider/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  model: RegisterModel = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  constructor(
    private auth: AuthenticationService,
    private snackbar: MatSnackBar,
    private router: Router) { }

  ngOnInit() { }

  public register(): void {
    this.auth.register(this.model)
      .then(() => this.toHome())
      .catch((err) => console.warn(err.code));
  }

  public toHome(): void {
    this.snackbar.open('You are registered', undefined, {
      duration: 1000
    }).afterDismissed().subscribe(() => {
      this.router.navigate(['/tabs']);
    });
  }

}
