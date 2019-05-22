import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenugasanComponent } from './penugasan.component';

describe('PenugasanComponent', () => {
  let component: PenugasanComponent;
  let fixture: ComponentFixture<PenugasanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenugasanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenugasanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
