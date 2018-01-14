import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Input() selectedTabIndex;
  @Input() categories: string[] = [];
  @Input() tags: string[] = [];
  constructor() { }

  ngOnInit() {
  }

}
