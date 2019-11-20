import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorsInputComponent } from './doors-input.component';

describe('DoorsInputComponent', () => {
  let component: DoorsInputComponent;
  let fixture: ComponentFixture<DoorsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
