import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../authentication/shared/provider/authentication.service';
import { DataService } from '../../shared/provider/data.service';
import { TabDescription } from '../../shared/models/tab-description.model';
import { TimeRecordModel } from '../../shared/models/time-record.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  private tabDescriptions: TabDescription[] = [
    { name: 'Overview', link: '/entry', icon: 'home' },
    { name: 'History', link: '/history', icon: 'history' },
    { name: 'Settings', link: '/settings', icon: 'settings' }
  ];

  categories: string[] = [];
  timerecords: TimeRecordModel[] = [];
  tags: string[] = [];

  selectedTabIndex = 0;

  constructor(
    private data: DataService,
    private auth: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getData();
    this.handleSubscriptions();
  }

  onTabChange(event: MatTabChangeEvent) {
    this.selectedTabIndex = event.index;
  }

  private getData(): void {
    this.data.getCategories();
    this.data.getTags();
    this.data.getRecords();
  }

  private handleSubscriptions(): void {
    this.data.categories.subscribe((categories) => this.categories = [...categories]);
    this.data.tags.subscribe((tags) => this.tags = [...tags]);
    this.data.timerecords.subscribe((timerecords) => {
     const parsedRecords = this.parseStringToDate(timerecords);
      this.timerecords = [...parsedRecords];
    });

  }

  parseStringToDate(timerecords: TimeRecordModel[]): TimeRecordModel[] {
    const parsedRecords = timerecords.map((t: TimeRecordModel) =>
      Object.assign({}, t, { date: new Date(t.date) })
    );

    return parsedRecords;
  }

}
