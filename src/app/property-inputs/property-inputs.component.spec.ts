import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInputsComponent } from './property-inputs.component';

describe('PropertyInputsComponent', () => {
  let component: PropertyInputsComponent;
  let fixture: ComponentFixture<PropertyInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
