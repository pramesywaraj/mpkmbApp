import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyKontakComponent } from './body-kontak.component';

describe('BodyKontakComponent', () => {
  let component: BodyKontakComponent;
  let fixture: ComponentFixture<BodyKontakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyKontakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyKontakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
