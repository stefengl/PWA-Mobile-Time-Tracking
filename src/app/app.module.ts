// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
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
