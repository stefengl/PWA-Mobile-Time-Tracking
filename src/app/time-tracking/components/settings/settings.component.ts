import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../../../authentication/shared/provider/authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  @Input() selectedTabIndex;
  @Input() categories: string[] = [];
  @Input() tags: string[] = [];

  settings: string[] = [
    "Categories",
    "Tags",
    "Notifications",
    "Timer",
    "UI",
    "Licenses",
    "About us",
    "Feedback"
  ]

  env: string = (environment.production) ? 'Production' : 'Development';

  constructor(
    private snack: MatSnackBar,
    private router: Router,
    private auth: AuthenticationService) { }


  signOut() {
    this.snack.open('Bye', undefined, {
      duration: 500
    }).afterDismissed().subscribe(() =>
      this.router.navigate([''])
        .then(() => this.auth.logout())
      );
  }

}
