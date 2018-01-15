import { TestBed, inject } from '@angular/core/testing';
import { TimeRecordBundlerService } from './time-record-bundler.service';
import { TimeRecordModel } from '../models/time-record.model';
import { TimeRecordGroupModel } from '../models/time-record-group.model';

describe('TimeRecordBundlerService', () => {

  let records: TimeRecordModel[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeRecordBundlerService]
    });
  });

  it(
    'should be created',
    inject([TimeRecordBundlerService], (service: TimeRecordBundlerService) => {

      expect(service).toBeTruthy();
    }));


  it(
    'should return empty array without any records',
    inject([TimeRecordBundlerService], (service: TimeRecordBundlerService) => {

      const result = service.groupRecordsByDate(records);

      expect(result.length).toBe(0);
      expect(result instanceof Array).toBe(true);
    }))

  it(
    'should return an list of daily entries',
    inject([TimeRecordBundlerService], (service: TimeRecordBundlerService) => {

      records = [
        { date: new Date(2018, 1, 15, 17, 0), category: 'Client A', time: 5 },
        { date: new Date(2018, 1, 14, 13, 0), category: 'Client A', time: 5 },
        { date: new Date(2018, 1, 15, 19, 0), category: 'Client A', time: 5 }
      ]

      const expected: TimeRecordGroupModel[] = [{
        date: new Date(2018, 1, 15, 19, 0),
        records: [
          {
            date: new Date(2018, 1, 15, 19, 0),
            category: 'Client A', time: 5
          },
          {
            date: new Date(2018, 1, 15, 17, 0),
            category: 'Client A', time: 5
          },
        ]
      }, {
        date: new Date(2018, 1, 14, 13, 0),
        records: [
          {
            date: new Date(2018, 1, 14, 13, 0),
            category: 'Client A', time: 5
          }
        ]
      }];

      const result = service.groupRecordsByDate(records);

      expect(result instanceof Array).toBe(true);
      expect(result.length).toBe(expected.length);
      expect(result[0].date).toBeTruthy();
      expect(result[0].date.getDate()).toBe(15)
      expect(result[1].date.getDate()).toBe(14)
    }))
});

