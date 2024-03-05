import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nombre!: any;
  ubicacion!: any;
  boton!: any;
  nombres: any[] = [
    {ini: 'MY NAME', is: 'IS'},
    {ini: 'MI NOMBRE', is: 'ES'}
  ]
  ubicaciones: any[] = [
    {work: 'Web Developer', ubicado: 'based in'},
    {work: 'Web Developer', ubicado: 'Ubicado en'}
  ]
  botones: any[] = [
    {text: 'Work With Me'},
    {text: 'Trabaja Conmigo'}
  ]

  constructor(private scrollService: ScrollService, private themeService: ThemeService) {
    this.themeService.language$.subscribe(lang => {
      this.nombre = this.nombres[lang];
      this.ubicacion = this.ubicaciones[lang];
      this.boton = this.botones[lang];
    });
  }

  scrollToSection(): void {
    this.scrollService.scrollToSection('contact');
  }
}
