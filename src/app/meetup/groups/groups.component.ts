import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { GroupsService } from '../../shared/services/groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit, AfterViewInit {
  groups: any;
  loading = true;
  categoryId: number;
  categoryName: string;
  displayedColumns = ['name', 'status', 'link'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private groupsService: GroupsService) {}

  ngOnInit() {
    this.loading = true;
    const category = JSON.parse(sessionStorage.getItem('category'));
    this.categoryId = category.id;
    this.categoryName = category.shortname;

    this.groupsService.getGroups(this.categoryId).subscribe(
      res => {
        this.loading = false;
        this.groups = res;
        this.dataSource.data = this.groups;
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
}
