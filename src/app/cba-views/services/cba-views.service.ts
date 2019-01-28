import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class CBAViewsService {
  private handleError: HandleError;
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('CBAViewsService');
  }

  getWarrants(): Observable<any[]> {
    return this.http.get<any[]>('api/warrants').pipe(
      map((resp: any) => resp.default.warrants),
      catchError(this.handleError('getWarrants', [])),
    );
  }
  getFilters(): Observable<any[]> {
    return this.http.get<any[]>('api/warrants').pipe(
      map((resp: any) => resp.default.filter),
      catchError(this.handleError('getFilters', [])),
    );
  }
  getOptions(): Observable<any[]> {
    return this.http.get<any[]>('api/options').pipe(
      map((resp: any) => resp.default.optionDetails),
      catchError(this.handleError('getOptions', [])),
    );
  }
}
