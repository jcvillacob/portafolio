import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  general: any = {};
  generals: any[] = [
    { subtitle: 'Experience', title: 'MY EXPERIENCE', paragraph: 'My career path includes diverse roles such as teaching teenage students and managing a bar, reflecting my ability to adapt and lead in various environments.' },
    { subtitle: 'Experiencia', title: 'MI EXPERIENCIA', paragraph: 'Mi trayectoria profesional incluye roles diversos como enseñar a estudiantes adolescentes y gestionar un bar, reflejando mi capacidad para adaptarme y liderar en varios entornos.' }
  ];
  lists: any[] = [
    { fdate: '2024', fcat: 'Project Management and Web Development', fexp: 'PROJECT PROFESSIONAL', sdate: '2022', scat: 'Automation Analyst and Web Development', sexp: 'FULL STACK WEB DEVELOPER', tdate: '2021', tcat: 'Teacher for Teenage Students', texp: 'TEACHER' },
    { fdate: '2024', fcat: 'Gestión de Proyectos y desarrollo web', fexp: 'PROFESIONAL DE PROYECTOS', sdate: '2022', scat: 'Desarrollo web y análisis de automatizaciones', sexp: 'DESARROLLADOR WEB FULL STACK', tdate: '2021', tcat: 'Profesor de estudiantes adolescentes', texp: 'PROFESOR PRE-ICFES' }
  ]
  list: any = {};

  constructor(private themeService: ThemeService) {
    this.themeService.language$.subscribe(lang => {
      this.general = this.generals[lang];
      this.list = this.lists[lang];
    });
  }
}
