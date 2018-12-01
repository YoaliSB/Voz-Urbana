import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceMainComponent } from './police-main.component';

describe('PoliceMainComponent', () => {
  let component: PoliceMainComponent;
  let fixture: ComponentFixture<PoliceMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
