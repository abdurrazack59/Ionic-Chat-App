import { TestBed } from '@angular/core/testing';

import { ControllersService } from './controllers.service';

describe('ControllersService', () => {
  let service: ControllersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControllersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
