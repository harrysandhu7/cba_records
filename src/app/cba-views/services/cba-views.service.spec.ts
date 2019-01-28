import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CBAViewsService } from './cba-views.service';
import { of } from 'rxjs';
import { HttpErrorHandler } from './http-error-handler.service';

import {mockData} from './cba-views.data';

class MockHttp {
  get() {
    return of([]);
  }
}

describe('ViewsService', () => {
  let service: CBAViewsService;
  let http: HttpClient;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        CBAViewsService,
        { provide: HttpClient, useClass: MockHttp },
        HttpErrorHandler,
      ],
    });
    http = bed.get(HttpClient);
    service = bed.get(CBAViewsService);
  });

  it('should be created', () => {
    service = TestBed.get(CBAViewsService);
    expect(service).toBeTruthy();
  });

  it('should get all warrants', () => {
    spyOn(http, 'get').and.returnValue(of({ default: { warrants: mockData.warrants } }));

    service.getWarrants().subscribe(result => {
      expect(result).toEqual(mockData.warrants);
    });
  });

  it('should get all filters', () => {
    spyOn(http, 'get').and.returnValue(of({ default: { filter: mockData.filter } }));

    service.getFilters().subscribe(result => {
      expect(result).toEqual(mockData.filter);
    });
  });

  it('should get all options', () => {
    spyOn(http, 'get').and.returnValue(of({ default: { optionDetails: mockData.options[0].optionDetails } }));

    service.getOptions().subscribe(result => {
      expect(result).toEqual(mockData.options[0].optionDetails);
    });
  });
});
