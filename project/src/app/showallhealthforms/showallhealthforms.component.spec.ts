import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallhealthformsComponent } from './showallhealthforms.component';

describe('ShowallhealthformsComponent', () => {
  let component: ShowallhealthformsComponent;
  let fixture: ComponentFixture<ShowallhealthformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallhealthformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallhealthformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
