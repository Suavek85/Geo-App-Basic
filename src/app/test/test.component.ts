import {Component} from '@angular/core';

/** @title Sidenav open & close behavior */
@Component({
  selector: 'test-root',
  templateUrl: 'test.component.html',
  styleUrls: ['test.component.css'],
})
export class Test {
  events: string[] = [];
  opened: boolean;
}