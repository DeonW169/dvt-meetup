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
  loading = true;
  categorySelected = false;
  categoryName: string;
  displayedColumns = ['id', 'name', 'shortname'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private settingsService: SettingsService) {}

  ngOnInit() {
    this.loading = true;
    this.settingsService.getCategories().subscribe(
      res => {
        this.loading = false;
        this.categories = res;
        this.dataSource.data = this.categories.results;
      },
      err => {
        console.error(err);
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setSelectedCategory(category) {
    sessionStorage.setItem('category', JSON.stringify(category));
    this.categorySelected = true;
    this.categoryName = category.shortname;
  }
}
