import { Component, OnInit, Input } from '@angular/core';
import { TimeRecordModel } from '../../shared/models/time-record.model';
import { MatSnackBar } from '@angular/material';
import { DataService } from '../../shared/provider/data.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  @Input() selectedTabIndex: number;
  @Input() categories: string[] = [];
  @Input() tags: string[] = [];

  record: TimeRecordModel = {
    category: null,
    date: new Date(),
    time: null,
    tags: null,
    note: null,
  };

  constructor(
    private snackbar: MatSnackBar,
    private data: DataService
  ) { }

  ngOnInit() { }

  public addRecord(): void {
    let messageInfo = 'Invalid form';

    const isValid: boolean = this.isEntryValid();
    if (isValid) {

      this.data.addRecord(this.record);
      messageInfo = 'Done';
    }

    this.showInfoSnack(messageInfo, undefined);
  }


  private showInfoSnack(msg: string, action: string): void {
    this.snackbar.open(msg, action, {
      duration: 1500
    });
  }

  private isEntryValid(): boolean {
    let isValid = false;

    if (this.record.date && this.record.category && this.record.time) {
      isValid = true;
    }

    return isValid;
  }

}
