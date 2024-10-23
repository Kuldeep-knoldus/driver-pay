import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverPayComponent } from './driver-pay.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('DriverPayComponent', () => {
  let component: DriverPayComponent;
  let fixture: ComponentFixture<DriverPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverPayComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
