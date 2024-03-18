import { TestBed } from '@angular/core/testing';

import { VarGlobalesService } from './var-globales.service';

describe('VarGlobalesService', () => {
  let service: VarGlobalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VarGlobalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
