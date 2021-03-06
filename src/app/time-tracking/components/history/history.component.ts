import { Component, OnChanges, Input } from '@angular/core';
import { TimeRecordModel } from '../../shared/models/time-record.model';
import { TimeRecordBundlerService } from '../../shared/provider/time-record-bundler.service';
import { TimeRecordGroupModel } from '../../shared/models/time-record-group.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnChanges {

  @Input() selectedTabIndex;
  @Input() timerecords: TimeRecordModel[] = [];

  groupedEntriesByDay: TimeRecordGroupModel[] = [];

  constructor(private bundler: TimeRecordBundlerService) { }


  ngOnChanges() {
    this.groupedEntriesByDay = this.bundler.groupRecordsByDate(this.timerecords);
  }

}
