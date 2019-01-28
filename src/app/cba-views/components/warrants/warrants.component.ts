import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { CBAViewsService } from '../../services/cba-views.service';

@Component({
  selector: 'app-warrants',
  templateUrl: './warrants.component.html',
  styleUrls: ['./warrants.component.scss'],
})
export class WarrantsComponent implements OnInit {
  displayedColumns: string[] = ['code', 'issuer', 'exercisePrice', 'multiplier', 'bid', 'offer', 'volume'];
  dataSource;
  filters;

  constructor(private viewsService: CBAViewsService) {}

  ngOnInit() {
    this.viewsService
      .getWarrants()
      .subscribe(
        warrants => (this.dataSource = new MatTableDataSource(warrants)),
      );
      this.viewsService
      .getFilters()
      .subscribe(
        filters => (this.filters = filters),
      );
  }

  applyFilters(filterValue: Array<string>) {
    this.dataSource.filter = filterValue;
  }
}
