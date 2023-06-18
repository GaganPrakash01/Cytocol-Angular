import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/Shared/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  email:string ="";
  password:string="";
  data ={email:this.email,password:this.password}

  
  constructor(private loginService:LoginService,private router:Router,private _snackBar:MatSnackBar){}
  ngOnInit(): void {
    
  }
  login(){
    console.log(this.email);
    console.log(this.password);
    var role:string = this.loginService.login(this.email,this.password);
      console.log(role);
      switch(role) {
        case 'user':
          this.router.navigate(['/home']);
          break;
        case 'lawyer':
          this.router.navigate(['/lawyer/home']);
          break;
        case 'null':
          alert('Invalid Login Crendentials ');
          break;
      }
      
    
  }

  reset(){
    this.router.navigate(['/reset-password']);
  }
}
