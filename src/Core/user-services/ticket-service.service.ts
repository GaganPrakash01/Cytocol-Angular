import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Ticket } from 'src/Shared/Models/Ticket';



@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  private url = 'http://localhost:3000/tickets';

  constructor(private http: HttpClient) { }

  createTicket(ticket: Ticket): Observable<Ticket> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<Ticket>(`${this.url}`, JSON.stringify(ticket), { headers });
  }
  
  updateTicket(ticket: Ticket): Observable<Ticket> {
    const headers = { 'Content-Type': 'application/json' };
    const url = `${this.url}/${ticket.id}`; // Replace 'id' with the actual identifier property of your Ticket class
    return this.http.put<Ticket>(url, JSON.stringify(ticket), { headers });
  }
  


  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.url);
  }

  getTicketsByUserId(userId: string): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.url}?UserId=${userId}`);
  }

  getTicketsByLawyerId(lawyerId: string): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.url}?LawyerId=${lawyerId}`);
  }

}
