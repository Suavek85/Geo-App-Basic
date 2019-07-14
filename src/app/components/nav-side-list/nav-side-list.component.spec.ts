/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavSideListComponent } from './nav-side-list.component';

describe('NavSideListComponent', () => {
  let component: NavSideListComponent;
  let fixture: ComponentFixture<NavSideListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSideListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
