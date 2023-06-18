import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LawService } from '../../../Core/user-services/law-service.service';
import { Law } from '../../../Shared/Models/Law';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-law-search',
  templateUrl: './law-search.component.html',
  styleUrls: ['./law-search.component.scss']
})
export class LawSearchComponent implements OnInit, AfterViewInit {
  dataSource: any;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  totalLaws: Law[] = [];
  filteredLaws: Law[] = [];
  availableColumns: string[] = ['Id', 'Chapter', 'Section', 'Title', 'Description'];
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize: number = 10;
  
  constructor(private lawService: LawService){}

  ngOnInit(): void {
    this.getLaws();
  }

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  getLaws(){
    this.lawService.getLaws().subscribe(laws=>{
      console.log('Return of law service: ',laws);
      this.totalLaws = laws;
      console.log('Total Laws var ',this.totalLaws);
      this.dataSource = new MatTableDataSource<Law>(this.totalLaws);
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
  searchLaws() {
    const searchValue = (document.querySelector('.search') as HTMLInputElement).value;
    const filteredLaws = this.totalLaws.filter(law => {
      return law?.Chapter?.toLowerCase().includes(searchValue.toLowerCase())
        || law?.Section?.toLowerCase().includes(searchValue.toLowerCase())
        || law?.Title?.toLowerCase().includes(searchValue.toLowerCase()) 
        || law?.Description?.toLowerCase().includes(searchValue.toLowerCase());
    });
    console.log(filteredLaws);
    this.filteredLaws = filteredLaws;
    this.dataSource = new MatTableDataSource<Law>(this.filteredLaws);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  onPageSizeChange(event:any){
    this.pageSize = event.pageSize;
    this.paginator.pageSize = this.pageSize;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
