import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  inicio: any;
  ubicacion!: any;
  description!: any;
  exp!: any;
  inicios: any[] = [
    { subtitle: 'Nice to Meet You!', title: 'ABOUT ME...' },
    { subtitle: '¡Gusto en Conocerte!', title: 'SOBRE MI...' },
  ];
  ubicaciones: any[] = [
    { work: 'Web Developer', ubicado: 'based in', download: 'Download CV' },
    { work: 'Web Developer', ubicado: 'Ubicado en', download: 'Descargar CV' }
  ];
  descriptions: any[] = [
    { desp: 'Born in 1998 and residing in the vibrant city of Medellín, Colombia, I am Juan Camilo, an explorer of worlds both real and imaginary. An Engineer and web developer, I find inspiration in science fiction and am always eager to discover new things. This creativity is reflected in my work, where I seek innovation and excellence in every project. Guided by a philosophy of constant learning and continuous improvement, I am firmly committed to contributing to meaningful projects and leaving a positive mark on the industry and those around me.' },
    { desp: 'Nacido en 1998 y residente en la vibrante ciudad de Medellín, Colombia, soy Juan Camilo, un explorador de mundos tanto reales como imaginarios. Ingeniero y desarrollador web, encuentro inspiración en la ciencia ficción y siempre estoy ansioso por descubrir cosas nuevas. Esta creatividad se refleja en mi trabajo, donde busco la innovación y la excelencia en cada proyecto. Guiado por una filosofía de aprendizaje constante y mejora continua, estoy firmemente comprometido a contribuir en proyectos significativos y dejar una marca positiva en la industria y en aquellos que me rodean.' }
  ];
  exps: any[] = [
    { years: 'Year experience', ypara: 'I am an Web Developer. With a dedication to excellence, I leverage my engineering and web development skills to enhance processes through automation.', proj: 'Projects completed', ppara: "In my career, I've successfully executed over six professional projects, each one contributing to innovative solutions and efficiency within various industrial and technological domains.", mess: 'The best way to predict the future is to invent it.' },
    { years: 'Años de experiencia', ypara: 'Soy un Desarrollador Web. Con una dedicación a la excelencia, aprovecho mis habilidades de ingeniería y desarrollo para mejorar los procesos a través de la automatización.', proj: 'Proyectos completados', ppara: 'En mi carrera, he ejecutado exitosamente más de seis proyectos profesionales, cada uno contribuyendo a soluciones innovadoras y eficiencia dentro de varios dominios industriales y tecnológicos.', mess: 'La mejor manera de predecir el futuro es inventarlo.' }
  ]


  constructor(private themeService: ThemeService) {
    this.themeService.language$.subscribe(lang => {
      this.inicio = this.inicios[lang];
      this.ubicacion = this.ubicaciones[lang];
      this.description = this.descriptions[lang];
      this.exp = this.exps[lang];
    });
  }

}
