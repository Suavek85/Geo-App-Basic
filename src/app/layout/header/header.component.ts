import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  events: string[] = [];
  opened: boolean;
  appName: string = '';
  constructor() {
    setTimeout(() => { this.appName = 'Beta' }, 1500)
  }
}