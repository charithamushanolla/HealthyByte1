import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourdietComponent } from './yourdiet.component';

describe('YourdietComponent', () => {
  let component: YourdietComponent;
  let fixture: ComponentFixture<YourdietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourdietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourdietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
