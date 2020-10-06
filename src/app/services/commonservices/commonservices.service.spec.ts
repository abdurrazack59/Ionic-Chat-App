import { TestBed } from '@angular/core/testing';

import { CommonservicesService } from './commonservices.service';

describe('CommonservicesService', () => {
  let service: CommonservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
