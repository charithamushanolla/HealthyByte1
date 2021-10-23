import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydiscussionComponent } from './mydiscussion.component';

describe('MydiscussionComponent', () => {
  let component: MydiscussionComponent;
  let fixture: ComponentFixture<MydiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
