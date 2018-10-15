import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCommentComponent } from './insert-comment.component';

describe('InsertCommentComponent', () => {
  let component: InsertCommentComponent;
  let fixture: ComponentFixture<InsertCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
