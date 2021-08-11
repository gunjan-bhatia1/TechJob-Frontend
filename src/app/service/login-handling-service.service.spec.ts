import { TestBed } from '@angular/core/testing';
import { LoginHandlingService } from './login-handling-service.service';


describe('LoginHandlingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginHandlingService = TestBed.get(LoginHandlingService);
    expect(service).toBeTruthy();
  });
});
