import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckdietComponent } from './checkdiet.component';

describe('CheckdietComponent', () => {
  let component: CheckdietComponent;
  let fixture: ComponentFixture<CheckdietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckdietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckdietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
