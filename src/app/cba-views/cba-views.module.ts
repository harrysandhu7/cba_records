import { NgModule } from '@angular/core';
import { OptionsComponent } from './components/options/options.component';
import { WarrantsComponent } from './components/warrants/warrants.component';
import {CBAViewsComponent} from './components/cba-views.component';
import { MaterialModule } from '../material.module';
import { CBAViewsService } from './services/cba-views.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpErrorHandler } from './services/http-error-handler.service';

@NgModule({
  imports: [MaterialModule, HttpClientModule, BrowserModule],
  exports: [CBAViewsComponent],
  declarations: [ OptionsComponent, WarrantsComponent, CBAViewsComponent],
  providers: [CBAViewsService, HttpErrorHandler],
})
export class CBAViewsModule { }
