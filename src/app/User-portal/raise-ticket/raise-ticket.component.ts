import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TicketServiceService } from 'src/Core/user-services/ticket-service.service';
import { Ticket } from 'src/Shared/Models/Ticket';




@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.scss']
})
export class RaiseTicketComponent {
  ticketForm!: FormGroup;
  ticket!: Ticket;
  imageFile!: File;

  constructor(private fb: FormBuilder, private ticketService:TicketServiceService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.ticketForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    this.ticket = new Ticket();
    this.ticket.Title = this.ticketForm.value.title;
    this.ticket.Description = this.ticketForm.value.description;
    this.ticket.CreatedAt = new Date();
    this.ticket.IsResolved = false;
  
    // Encode image file as base64 string
    const reader = new FileReader();
    reader.readAsDataURL(this.imageFile);
    reader.onload = () => {
      this.ticket.ImageDataUrl = reader.result as string;
  
      // Call createTicket method in service
      this.ticketService.createTicket(this.ticket).subscribe(
        () => {
          console.log('Ticket created successfully!');
          this.ticketForm.reset();
          alert('Ticket raised successfully');
    this.snackBar.open('Ticket Raised Successfully', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
        },
        (error: any) => {
          console.log(error);
          alert('Ticket Could Not Be Raised');
          this.snackBar.open('Ticket Could Not Be Raised', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
        }
      );
    };
  }
  
  
  onImageChange(event:any) {
    this.imageFile = event.target.files[0];
  }
}
