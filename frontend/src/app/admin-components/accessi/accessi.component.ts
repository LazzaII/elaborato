import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../api.service';
import { Access } from '../../shared/Access';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-accessi',
  templateUrl: './accessi.component.html',
  styleUrls: ['./accessi.component.css']
})
export class AccessiComponent implements OnInit{  

  private error: any;
  public dataSource: any

  public readonly displayedColumns: string[] = [
    'access', 'exit', 'teacher'
  ];

  constructor(private restClient : ApiService) { }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() : void {
    this.loadData();
  }

  applyFilter( filterValue : string ) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadData() : void {
    this.restClient.getAccess().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Access>(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator; 
      },
      error => this.error = error
    )
  }
}
