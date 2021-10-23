import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieticianpageComponent } from './dieticianpage.component';

describe('DieticianpageComponent', () => {
  let component: DieticianpageComponent;
  let fixture: ComponentFixture<DieticianpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieticianpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieticianpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
