import { Component } from '@angular/core';
import { TicketServiceService } from 'src/Core/user-services/ticket-service.service';
import { Ticket } from 'src/Shared/Models/Ticket';

@Component({
  selector: 'app-user-tickets',
  templateUrl: './user-tickets.component.html',
  styleUrls: ['./user-tickets.component.scss']
})
export class UserTicketsComponent {
  tickets!: Ticket[];
  user : string ="";
  constructor(private ticketService: TicketServiceService) { }

  ngOnInit(): void {

    this.user = localStorage.getItem('user') || "";

    if(this.user == "User") {
      const userId = '1';
      this.ticketService.getTicketsByUserId(userId!).subscribe((tickets: Ticket[]) => {
        this.tickets = tickets;
      });
    }else if(this.user == "Lawyer") {
      const lawyerId = '1';
      this.ticketService.getTicketsByLawyerId(lawyerId!).subscribe((tickets: Ticket[]) => {
        this.tickets = tickets;
      });
    }
   
  }


  closeTicket(ticket: Ticket): void {
    ticket.LawyerId = 1; // Update the LawyerId to 1
    ticket.IsResolved=true;
    ticket.IsProcessing = false;
    this.ticketService.updateTicket(ticket).subscribe(
      updatedTicket => {
        // Handle the updated ticket response as needed
        console.log('Ticket updated:', updatedTicket);
      },
      error => {
        // Handle any errors that occur during the update
        console.error('Error updating ticket:', error);
      }
    );
  }
}
