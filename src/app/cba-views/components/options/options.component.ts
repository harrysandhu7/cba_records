import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { CBAViewsService } from '../../services/cba-views.service';
import { OptionDetails } from '../../models/option.model';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
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
    this._populateOptions();
  }

  private _populateOptions() {
    this.viewsService.getOptions().subscribe((options: OptionDetails[]) => {
      this.dataSource = new MatTableDataSource(
        this._transformTableData(options),
      );
    });
  }

  private _transformTableData(optionsDetails: OptionDetails[]): any {
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
