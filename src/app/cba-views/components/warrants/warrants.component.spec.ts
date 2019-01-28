import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { WarrantsComponent } from './warrants.component';
import { MaterialModule } from 'src/app/material.module';
import { of } from 'rxjs';
import { CBAViewsService } from '../../services/cba-views.service';
import { HttpErrorHandler } from '../../services/http-error-handler.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


class MockHttp {
  get() {
    return of([]);
  }
}
describe('WarrantsComponent', () => {
  let component: WarrantsComponent;
  let fixture: ComponentFixture<WarrantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        CBAViewsService,
        { provide: HttpClient, useClass: MockHttp },
        HttpErrorHandler
      ],
      imports: [MaterialModule, BrowserAnimationsModule],
      declarations: [ WarrantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
