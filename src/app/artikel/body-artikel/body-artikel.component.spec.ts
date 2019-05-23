import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyArtikelComponent } from './body-artikel.component';

describe('BodyArtikelComponent', () => {
  let component: BodyArtikelComponent;
  let fixture: ComponentFixture<BodyArtikelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyArtikelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
