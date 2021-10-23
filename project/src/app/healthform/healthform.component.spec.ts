import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthformComponent } from './healthform.component';

describe('HealthformComponent', () => {
  let component: HealthformComponent;
  let fixture: ComponentFixture<HealthformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
