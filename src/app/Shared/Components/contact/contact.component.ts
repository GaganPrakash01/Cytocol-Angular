import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor() { }

  onSubmit(form: NgForm) {
    form.reset();
    alert('Your message has been sent successfully!');
  }
}
