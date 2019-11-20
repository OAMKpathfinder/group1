import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersInputComponent } from './others-input.component';

describe('OthersInputComponent', () => {
  let component: OthersInputComponent;
  let fixture: ComponentFixture<OthersInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
