import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTechnicianComponent } from './single-technician.component';

describe('SingleTechnicianComponent', () => {
  let component: SingleTechnicianComponent;
  let fixture: ComponentFixture<SingleTechnicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTechnicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
