// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TimeTrackingModule } from './time-tracking/time-tracking.module';
import { AuthenticationModule } from './authentication/authentication.module';

// Declarations
import { AppComponent } from './app.component';

// Other
import { environment } from '../environments/environment';
import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: true }),
    AppRoutingModule,
    TimeTrackingModule,
    AuthenticationModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
