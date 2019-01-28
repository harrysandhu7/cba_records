import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { OptionsComponent } from './options.component';
import { MaterialModule } from 'src/app/material.module';
import { of } from 'rxjs';
import { CBAViewsService } from '../../services/cba-views.service';
import { HttpErrorHandler } from '../../services/http-error-handler.service';


class MockHttp {
  get() {
    return of([]);
  }
}

describe('OptionsComponent', () => {
  let component: OptionsComponent;
  let fixture: ComponentFixture<OptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        CBAViewsService,
        { provide: HttpClient, useClass: MockHttp },
        HttpErrorHandler,
      ],
      imports: [MaterialModule],
      declarations: [ OptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
