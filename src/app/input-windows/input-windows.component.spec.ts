import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWindowsComponent } from './input-windows.component';

describe('InputWindowsComponent', () => {
  let component: InputWindowsComponent;
  let fixture: ComponentFixture<InputWindowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWindowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
