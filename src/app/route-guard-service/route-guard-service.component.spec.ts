import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGuardServiceComponent } from './route-guard-service.component';

describe('RouteGuardServiceComponent', () => {
  let component: RouteGuardServiceComponent;
  let fixture: ComponentFixture<RouteGuardServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteGuardServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteGuardServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
