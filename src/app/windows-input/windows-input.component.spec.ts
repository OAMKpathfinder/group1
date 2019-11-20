import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsInputComponent } from './windows-input.component';

describe('WindowsInputComponent', () => {
  let component: WindowsInputComponent;
  let fixture: ComponentFixture<WindowsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
