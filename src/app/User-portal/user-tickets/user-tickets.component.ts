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

  constructor(private ticketService: TicketServiceService) { }

  ngOnInit(): void {
    const userId = '1';
    this.ticketService.getTicketsByUserId(userId!).subscribe((tickets: Ticket[]) => {
      this.tickets = tickets;
    });
  }
}
