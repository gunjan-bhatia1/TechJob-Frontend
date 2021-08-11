import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsTechnicianComponent } from './jobs-technician.component';

describe('JobsTechnicianComponent', () => {
  let component: JobsTechnicianComponent;
  let fixture: ComponentFixture<JobsTechnicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsTechnicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
