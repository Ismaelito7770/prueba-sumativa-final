import { TestBed } from '@angular/core/testing';

import { EmpresaServiciosService } from './empresa-servicios.service';

describe('EmpresaServiciosService', () => {
  let service: EmpresaServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresaServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
