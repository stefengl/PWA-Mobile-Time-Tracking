import { Route } from '@angular/router';
import { LoginComponent } from '../authentication/components/login/login.component';
import { RegistrationComponent } from '../authentication/components/registration/registration.component';
import { TabsComponent } from '../time-tracking/components/tabs/tabs.component';
import { AuthenticationGuard } from '../authentication/shared/guards/authentication.guard';

const routes: Route[] = [
    { path: '', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'tabs', component: TabsComponent, canActivate: [AuthenticationGuard] }
];

export { routes };
