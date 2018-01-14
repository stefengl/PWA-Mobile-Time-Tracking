import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './shared/provider/data.service';
import { TimeRecordBundlerService } from './shared/provider/time-record-bundler.service';
import { HistoryComponent } from './components/history/history.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { EntryComponent } from './components/entry/entry.component';

@NgModule({
  imports: [
    CommonModule
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