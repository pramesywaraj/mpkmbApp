import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyGaleriComponent } from './body-galeri.component';

describe('BodyGaleriComponent', () => {
  let component: BodyGaleriComponent;
  let fixture: ComponentFixture<BodyGaleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyGaleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyGaleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
