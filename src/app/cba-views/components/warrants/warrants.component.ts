import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { CBAViewsService } from '../../services/cba-views.service';
import { Warrant, Filter } from '../../models/warrant.model';

@Component({
  selector: 'app-warrants',
  templateUrl: './warrants.component.html',
  styleUrls: ['./warrants.component.scss'],
})
export class WarrantsComponent implements OnInit {
  displayedColumns: string[] = [
    'code',
    'issuer',
    'exercisePrice',
    'multiplier',
    'bid',
    'offer',
    'volume',
  ];
  dataSource;
  filters;

  constructor(private viewsService: CBAViewsService) {}

  ngOnInit() {
    this._populateWarrants();
    this._populateFilters();
  }

  private _populateWarrants() {
    this.viewsService
      .getWarrants()
      .subscribe(
        (warrants: Warrant[]) =>
          (this.dataSource = new MatTableDataSource(warrants)),
      );
  }

  private _populateFilters() {
    this.viewsService
      .getFilters()
      .subscribe((filters: Filter[]) => (this.filters = filters));
  }

  applyFilters(filterValue: Array<string>) {
    this.dataSource.filter = filterValue;
  }
}
