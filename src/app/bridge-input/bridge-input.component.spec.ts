import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeInputComponent } from './bridge-input.component';

describe('BridgeInputComponent', () => {
  let component: BridgeInputComponent;
  let fixture: ComponentFixture<BridgeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridgeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
