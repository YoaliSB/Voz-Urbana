import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedEventsComponent } from './published-events.component';

describe('PublishedEventsComponent', () => {
  let component: PublishedEventsComponent;
  let fixture: ComponentFixture<PublishedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
