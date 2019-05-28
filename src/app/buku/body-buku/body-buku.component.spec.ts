import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBukuComponent } from './body-buku.component';

describe('BodyBukuComponent', () => {
  let component: BodyBukuComponent;
  let fixture: ComponentFixture<BodyBukuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyBukuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyBukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
