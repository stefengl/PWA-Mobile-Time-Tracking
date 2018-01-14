import { Injectable } from '@angular/core';
import { TimeRecordModel } from '../models/time-record.model';
import { AuthenticationService } from '../../../authentication/shared/provider/authentication.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DataService {

  categories = null;
  tags = null;
  timerecords = null;

  constructor(
    private auth: AuthenticationService,
    private fireDb: AngularFireDatabase) { }

  getCategories() {
    this.categories = this.fireDb.list('categories').valueChanges()
  }

  getTags() {
    this.tags = this.fireDb.list('tags').valueChanges()

  }

  getRecords() {
    const id = this.auth.user.uid
    this.timerecords = this.fireDb.list<TimeRecordModel>(id).valueChanges();
  }

  addRecord(record: TimeRecordModel) {
    const id = this.auth.user.uid
    const timeRecordRef = this.fireDb.list(id);

    const recordToAdd = Object.assign(
      {},
      record,
      { date: record.date.toString() }
    )

    timeRecordRef.push(recordToAdd);
  }

  addTag(tag: string) {
    return this.fireDb.list('tags').push(tag);
  }

  addCategory(category: string) {
    return this.fireDb.list('categories').push(category);
  }

  deleteTag(tag: string) {
    return this.fireDb.list('tags').remove(tag);
  }

  deleteCategory(category: string) {
    return this.fireDb.list('categories').remove(category);
  }


}
