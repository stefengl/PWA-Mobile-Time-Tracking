import { Injectable } from '@angular/core';
import { TimeRecordModel } from '../models/time-record.model';
import { TimeRecordGroupModel } from '../models/time-record-group.model';
import * as _ from 'lodash';

@Injectable()
export class TimeRecordBundlerService {

  constructor() { }

  groupRecordsByDate(records: TimeRecordModel[]): TimeRecordGroupModel[] {

    const dailyEntries: TimeRecordGroupModel[] = [];

    const bundledRecords : _.Dictionary<TimeRecordModel[]> = _.chain(records)
      .sortBy(r => r.date)
      .groupBy(r => r.date)
      .value();

    _.each(bundledRecords, records => {
      dailyEntries.push(new TimeRecordGroupModel(records));
    });


    return dailyEntries.reverse();
  }

}
