import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Shared/Components/Login/login/login.component';
import { HeaderComponent } from './Shared/Components/header/header.component';
import { FooterComponent } from './Shared/Components/footer/footer.component';
import { HomeScreenComponent } from './User-portal/home-screen/home-screen.component';
import { LawyerHomeComponent } from './Lawyer-portal/lawyer-home/lawyer-home.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LawSearchComponent } from './User-portal/law-search/law-search.component';
import { LawyerSearchComponent } from './User-portal/lawyer-search/lawyer-search.component';
import { RaiseTicketComponent } from './User-portal/raise-ticket/raise-ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserTicketsComponent } from './User-portal/user-tickets/user-tickets.component';
import { LawyerHeaderComponent } from './Lawyer-portal/lawyer-header/lawyer-header.component';
import { ContactComponent } from './Shared/Components/contact/contact.component';
import { AllTicketsComponent } from './User-portal/all-tickets/all-tickets.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeScreenComponent,
    LawyerHomeComponent,
    LawSearchComponent,
    LawyerSearchComponent,
    RaiseTicketComponent,
    UserTicketsComponent,
    LawyerHeaderComponent,
    ContactComponent,
    AllTicketsComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule ,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    MatSnackBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
