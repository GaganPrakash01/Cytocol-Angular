import { Component } from '@angular/core';
import { TicketServiceService } from 'src/Core/user-services/ticket-service.service';
import { Ticket } from 'src/Shared/Models/Ticket';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.scss']
})
export class AllTicketsComponent {
  tickets!: Ticket[];

  constructor(private ticketService: TicketServiceService) { }

  ngOnInit(): void {
    this.ticketService.getAllTickets().subscribe((tickets: Ticket[]) => {
      this.tickets = tickets;
    });
  }

  takeUpTicket(ticket: Ticket): void {
    ticket.LawyerId = 1; // Update the LawyerId to 1
    ticket.IsProcessing = true;
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
