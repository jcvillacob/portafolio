import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  inicio!: any;
  forma!: any;
  formulario!: any;
  inicios: any[] = [
    { subtitle: 'Contact', title: 'REACH OUT ME' },
    { subtitle: 'Contacto', title: 'CONTÁCTAME' }
  ];
  formas: any[] = [
    { chat: 'Chat to Me', chatpara: 'You can contact me at', call: 'Call me', callpara: 'I am here to help you in whatever you need.', linkedin: 'You can view my LinkedIn profile.' },
    { chat: 'Háblame', chatpara: 'Puedes contactarme en el correo', call: 'Llámame', callpara: 'Estoy aquí para ayudarte en cualquier cosa que necesites.', linkedin: 'Puedes ver mi perfil de LinkedIn.' }
  ];
  formularios: any[] = [
    { text: 'Do you have any doubt? You can contact me at any time.', first: 'NAME', email: 'EMAIL', sub: 'SUBJET', message: 'YOUR MESSAGE', send: 'Send Message' },
    { text: '¿Tienes alguna duda? Puedes contactarme en cualquier momento.', first: 'NOMBRE', email: 'CORREO ELECTRÓNICO', sub: 'ASUNTO', message: 'TU MENSAJE', send: 'Enviar Mensaje' }
  ];

  /* Para el envío del email */
  firstName: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  constructor(private themeService: ThemeService) {
    this.themeService.language$.subscribe(lang => {
      this.inicio = this.inicios[lang];
      this.forma = this.formas[lang];
      this.formulario = this.formularios[lang];
    });
  }

  sendMessage(event: Event) {
    event.preventDefault();
    const body = `First Name: ${this.firstName}\nEmail: ${this.email}\nSubject: ${this.subject}\n\n${this.message}\n\n`;
    window.location.href = `mailto:jucaviza6@gmail.com?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(body)}`;
  }



}
