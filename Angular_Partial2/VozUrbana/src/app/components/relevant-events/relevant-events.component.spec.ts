import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevantEventsComponent } from './relevant-events.component';

describe('RelevantEventsComponent', () => {
  let component: RelevantEventsComponent;
  let fixture: ComponentFixture<RelevantEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelevantEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelevantEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
