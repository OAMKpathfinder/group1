import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundInputComponent } from './ground-input.component';

describe('GroundInputComponent', () => {
  let component: GroundInputComponent;
  let fixture: ComponentFixture<GroundInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroundInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
