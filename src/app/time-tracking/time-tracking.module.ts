// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing/app-routing.module';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FlexLayoutModule } from '@angular/flex-layout';

// DECLARATIONS
import { HistoryComponent } from './components/history/history.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { EntryComponent } from './components/entry/entry.component';

// PROVIDERS
import { DataService } from './shared/provider/data.service';
import { TimeRecordBundlerService } from './shared/provider/time-record-bundler.service';
import { AuthenticationModule } from '../authentication/authentication.module';
import { FormsModule } from '@angular/forms';

// OTHERS

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    NgMaterialModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AuthenticationModule
  ],
  declarations: [
    HistoryComponent,
    SettingsComponent,
    TabsComponent,
    EntryComponent
  ],
  providers: [
    DataService,
    TimeRecordBundlerService
  ],
  exports: [
    HistoryComponent,
    SettingsComponent,
    TabsComponent,
    EntryComponent
  ]
})
export class TimeTrackingModule { }
