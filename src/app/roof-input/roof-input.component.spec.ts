import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofInputComponent } from './roof-input.component';

describe('RoofInputComponent', () => {
  let component: RoofInputComponent;
  let fixture: ComponentFixture<RoofInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoofInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoofInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
