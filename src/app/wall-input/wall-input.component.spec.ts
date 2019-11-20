import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallInputComponent } from './wall-input.component';

describe('WallInputComponent', () => {
  let component: WallInputComponent;
  let fixture: ComponentFixture<WallInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
