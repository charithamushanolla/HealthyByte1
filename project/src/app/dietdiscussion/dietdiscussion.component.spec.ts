import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietdiscussionComponent } from './dietdiscussion.component';

describe('DietdiscussionComponent', () => {
  let component: DietdiscussionComponent;
  let fixture: ComponentFixture<DietdiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietdiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietdiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
