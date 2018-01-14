import { TimeRecordModel } from './time-record.model';

export class TimeRecordGroupModel {
    date: Date;
    records: TimeRecordModel[] = [];


    constructor(records: TimeRecordModel[]) {
        this.date = records[0].date;
        this.records = [...records];
    }
}
