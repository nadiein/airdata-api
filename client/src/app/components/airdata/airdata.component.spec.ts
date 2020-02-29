/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AirdataComponent } from './airdata.component';

describe('AirdataComponent', () => {
  let component: AirdataComponent;
  let fixture: ComponentFixture<AirdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
