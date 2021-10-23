import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallclientsComponent } from './showallclients.component';

describe('ShowallclientsComponent', () => {
  let component: ShowallclientsComponent;
  let fixture: ComponentFixture<ShowallclientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallclientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
