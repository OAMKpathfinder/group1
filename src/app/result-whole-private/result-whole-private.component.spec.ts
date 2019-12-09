import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultWholePrivateComponent } from './result-whole-private.component';

describe('ResultWholePrivateComponent', () => {
  let component: ResultWholePrivateComponent;
  let fixture: ComponentFixture<ResultWholePrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultWholePrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultWholePrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
