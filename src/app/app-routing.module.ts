import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Shared/Components/Login/login/login.component';
import { HomeScreenComponent } from './User-portal/home-screen/home-screen.component';
import { LawyerHomeComponent } from './Lawyer-portal/lawyer-home/lawyer-home.component';
import { LawSearchComponent } from './User-portal/law-search/law-search.component';
import { LawyerSearchComponent } from './User-portal/lawyer-search/lawyer-search.component';
import { RaiseTicketComponent } from './User-portal/raise-ticket/raise-ticket.component';
import { UserTicketsComponent } from './User-portal/user-tickets/user-tickets.component';
import { ContactComponent } from './Shared/Components/contact/contact.component';
import { AllTicketsComponent } from './User-portal/all-tickets/all-tickets.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeScreenComponent
  },
  {
    path:'lawyer/home',
    component:LawyerHomeComponent
  },
  {
    path:'laws',
    component:LawSearchComponent
  },
  {
    path:'lawyers',
    component:LawyerSearchComponent
  },
  {
    path:'raise-ticket',
    component:RaiseTicketComponent
  },
  {
    path:'my-tickets',
    component:UserTicketsComponent
  },
  {
    path:'contact-us',
    component:ContactComponent
  },
  {
    path:'all-tickets',
    component:AllTicketsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
