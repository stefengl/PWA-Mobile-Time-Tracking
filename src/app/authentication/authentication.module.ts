// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';

// Declarations
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

// Provider
import { AuthenticationService } from './shared/provider/authentication.service';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

// Other
import { environment } from '../../environments/environment';
import { AppRoutingModule } from '../routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgMaterialModule,
    AngularFireModule.initializeApp(environment.firebase as FirebaseAppConfig),
    AngularFireAuthModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  exports: [
    LoginComponent,
    RegistrationComponent
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard
  ]
})
export class AuthenticationModule { }
