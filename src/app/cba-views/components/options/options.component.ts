import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { CBAViewsService } from '../../services/cba-views.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  optionsDetails;
  dataSource;
  displayedColumns: string[] = [
    'code',
    'bid',
    'offer',
    'openInterest',
    'volume',
    'lastTrade',
    'strikePrice',
  ];

  constructor(private viewsService: CBAViewsService) {}

  ngOnInit() {
    this.viewsService.getOptions().subscribe(options => {
      this.dataSource = new MatTableDataSource(
        this.transformTableData(options),
      );
    });
  }
  private transformTableData(optionsDetails: any): any {
    let rows = [];
    optionsDetails.forEach(optionDetail => {
      rows.push({ expiryDate: optionDetail.expiryDate, isGroupBy: true });
      rows = [...rows, ...optionDetail.options];
    });
    return rows;
  }
  isGroup(index, item): boolean {
    return item.isGroupBy;
  }
}
