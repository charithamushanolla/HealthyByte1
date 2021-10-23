import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDietsComponent } from './get-diets.component';

describe('GetDietsComponent', () => {
  let component: GetDietsComponent;
  let fixture: ComponentFixture<GetDietsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDietsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDietsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
