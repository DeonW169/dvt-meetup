import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { SettingsService } from '../../shared/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, AfterViewInit {
  categories: any;
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private settingsService: SettingsService) {}

  ngOnInit() {
    debugger;

    const res = this.settingsService.getCategories();

    // this.settingsService.getCategories().subscribe(res => {
    //   console.log('res from service', res);
    // });

    // this.settingsService.getGroups().subscribe((categories: any) => {
    //   this.categories = categories;
    // });
  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
