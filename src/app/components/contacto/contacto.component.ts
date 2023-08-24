import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  firstName: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  sendMessage(event: Event) {
    event.preventDefault();
    const body = `First Name: ${this.firstName}\nEmail: ${this.email}\nSubject: ${this.subject}\n\n${this.message}\n\n`;
    window.location.href = `mailto:jucaviza6@gmail.com?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(body)}`;
  }  
  
}
