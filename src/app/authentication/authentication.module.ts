import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { AuthenticationService } from './shared/provider/authentication.service';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent, RegistrationComponent],
  exports: [LoginComponent, RegistrationComponent],
  providers: [AuthenticationService, AuthenticationGuard]
})
export class AuthenticationModule { }
