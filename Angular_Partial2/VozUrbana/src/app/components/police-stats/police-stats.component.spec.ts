import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceStatsComponent } from './police-stats.component';

describe('PoliceStatsComponent', () => {
  let component: PoliceStatsComponent;
  let fixture: ComponentFixture<PoliceStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
