import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBeritaComponent } from './body-berita.component';

describe('BodyBeritaComponent', () => {
  let component: BodyBeritaComponent;
  let fixture: ComponentFixture<BodyBeritaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyBeritaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyBeritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
