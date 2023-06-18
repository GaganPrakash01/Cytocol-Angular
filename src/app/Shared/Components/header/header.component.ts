import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: string = "";

  ngOnInit(): void {
    this.user = localStorage.getItem('user') || "";
    console.log(this.user);
  }
}