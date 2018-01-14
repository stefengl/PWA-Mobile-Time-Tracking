// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { TimeTrackingModule } from './time-tracking/time-tracking.module';
import { AuthenticationModule } from './authentication/authentication.module';

// Components
import { AppComponent } from './app.component';

// Other
import { environment } from '../environments/environment';
import { routes } from './routing/app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(routes),
    NgMaterialModule,
    TimeTrackingModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
