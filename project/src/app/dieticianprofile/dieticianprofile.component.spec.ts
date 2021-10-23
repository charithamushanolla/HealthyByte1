import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieticianprofileComponent } from './dieticianprofile.component';

describe('DieticianprofileComponent', () => {
  let component: DieticianprofileComponent;
  let fixture: ComponentFixture<DieticianprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieticianprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieticianprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
