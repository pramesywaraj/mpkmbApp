import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyStoreComponent } from './body-store.component';

describe('BodyStoreComponent', () => {
  let component: BodyStoreComponent;
  let fixture: ComponentFixture<BodyStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
