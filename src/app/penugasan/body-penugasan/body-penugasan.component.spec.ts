import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPenugasanComponent } from './body-penugasan.component';

describe('BodyPenugasanComponent', () => {
  let component: BodyPenugasanComponent;
  let fixture: ComponentFixture<BodyPenugasanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPenugasanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPenugasanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
