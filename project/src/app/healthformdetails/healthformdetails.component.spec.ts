import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthformdetailsComponent } from './healthformdetails.component';

describe('HealthformdetailsComponent', () => {
  let component: HealthformdetailsComponent;
  let fixture: ComponentFixture<HealthformdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthformdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthformdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
