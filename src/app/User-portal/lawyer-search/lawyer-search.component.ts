import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LawyerService } from '../../../Core/lawyer-services/lawyer-service.service';
import { Lawyer } from '../../../Shared/Models/Lawyer';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lawyer-search',
  templateUrl: './lawyer-search.component.html',
  styleUrls: ['./lawyer-search.component.scss']
})

export class LawyerSearchComponent implements OnInit, AfterViewInit {
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  totalLawyers: Lawyer[] = [];
  filteredLawyers: Lawyer[] = [];
  availableColumns: string[] = ['Id', 'Name', 'Email', 'UserName', 'Mobile','AccountActive','Location'];
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize: number = 10;

  constructor(private lawyerService: LawyerService) { }

  ngOnInit(): void {
    this.getLawyers();
  }

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  getLawyers() {
    this.lawyerService.getLawyers().subscribe(lawyers => {
      console.log('Return of lawyer service: ', lawyers);
      this.totalLawyers = lawyers;
      console.log('Total Lawyers var ', this.totalLawyers);
      this.dataSource = new MatTableDataSource<Lawyer>(this.totalLawyers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  searchLawyers() {
    const searchValue = (document.querySelector('.search') as HTMLInputElement).value;
    const filteredLawyers = this.totalLawyers.filter(lawyer => {
      return lawyer?.Name?.toLowerCase().includes(searchValue.toLowerCase())
        || lawyer?.UserName?.toLowerCase().includes(searchValue.toLowerCase())
        || lawyer?.Mobile?.toLowerCase().includes(searchValue.toLowerCase())
        || lawyer?.Id?.toString().includes(searchValue.toLowerCase())
        || lawyer?.Email?.toLowerCase().includes(searchValue.toLowerCase());
    });
    console.log(filteredLawyers);
    this.filteredLawyers = filteredLawyers;
    this.dataSource = new MatTableDataSource<Lawyer>(this.filteredLawyers);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onPageSizeChange(event: any) {
    this.pageSize = event.pageSize;
    this.paginator.pageSize = this.pageSize;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
