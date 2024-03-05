import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  inicio: any;
  experience!: any[];
  inicios: any[] = [
    { subtitle: 'My Service', title: 'MY SKILLS' },
    { subtitle: 'Mis Servicios', title: 'MIS HABILIDADES' },
  ];
  experiences: any[] = [
    [
      {
        name: 'Web Development', showed: false, img: 'assets/skills/laptop.jpg',
        text: [
          { name: 'Front-End Development', description: 'Experience in HTML, CSS, JS, and Angular, with a passion for design and usability.' },
          { name: 'Full-Stack Development', description: 'Experience in Full-Stack projects using NodeJS, MongoDB, SQLServe and MySQL.' },
          { name: 'Version Control with GIT', description: 'Efficient version handling and collaboration on team projects.' },
          { name: 'Data Analysis with Python', description: 'Utilization of Python for data analysis and process automation.' },
          { name: 'Business Intelligence Tools', description: 'Proficiency in Excel and PowerBi for data visualization and analysis.' }
        ]
      },
      {
        name: 'Complementary Skills', showed: false, img: 'assets/skills/posticks.jpg',
        text: [
          { name: 'SCRUM Methodology', description: 'Application of the SCRUM methodology in project development, focusing on collaboration and continuous delivery.' },
          { name: 'Working in Multidisciplinary Teams', description: 'Experience in the innovation area, working with diverse teams, and adapting to different roles and responsibilities.' },
          { name: 'Version Control with GIT', description: 'Efficient version handling and collaboration on team projects.' },
          { name: 'Continuous Learning', description: 'Commitment to professional growth through courses and self-learning.' }
        ]
      },
      {
        name: 'Soft Skills', showed: false, img: 'assets/skills/problemSolving.jpg',
        text: [
          { name: 'Effective Communication', description: 'Ability to communicate ideas and collaborate effectively with multidisciplinary teams.' },
          { name: 'Adaptability', description: 'Flexibility to adapt to different environments and challenges, especially in the area of innovation.' },
          { name: 'Problem-Solving', description: 'Creative and analytical approach to problem-solving and process improvement.' },
          { name: 'Self-Management and Organization', description: 'Skill in managing time and priorities, maintaining focus on goals and deadlines.' }
        ]
      }
    ],
    [
      {
        name: 'Desarrollo Web', showed: false, img: 'assets/skills/laptop.jpg',
        text: [
          { name: 'Desarrollo Front-End', description: 'Experiencia en HTML, CSS, JS y Angular, con pasión por el diseño y la usabilidad.' },
          { name: 'Desarrollo Full Stack', description: 'Experiencia en proyectos Full-Stack utilizando NodeJS, MongoDB, SQL Server y MySQL.' },
          { name: 'Python para Análisis de Datos', description: 'Utilización de Python para análisis de datos y automatización de procesos.' },
          { name: 'Herramientas Business Intelligence', description: 'Dominio de Excel y PowerBi para visualización y análisis de datos.' }
        ]
      },
      {
        name: 'Habilidades Complementarias', showed: false, img: 'assets/skills/posticks.jpg',
        text: [
          { name: 'Metodologías Ágiles (SCRUM)', description: 'Aplicación de la metodología SCRUM en el desarrollo de proyectos, enfocándose en la colaboración y entrega continua.' },
          { name: 'Trabajo en Equipos Multidisciplinarios', description: 'Experiencia en el área de innovación, trabajando con equipos diversos y adaptándose a diferentes roles y responsabilidades.' },
          { name: 'Control de Versiones con GIT', description: 'Manejo eficiente de versiones y colaboración en proyectos de equipo.' },
          { name: 'Aprendizaje Continuo', description: 'Compromiso con el crecimiento profesional a través de cursos y autoaprendizaje.' }
        ]
      },
      {
        name: 'Habilidades Blandas', showed: false, img: 'assets/skills/problemSolving.jpg',
        text: [
          { name: 'Comunicación Efectiva', description: 'Capacidad para comunicar ideas y colaborar efectivamente con equipos multidisciplinarios.' },
          { name: 'Adaptabilidad', description: 'Flexibilidad para adaptarse a diferentes entornos y desafíos, especialmente en el área de innovación.' },
          { name: 'Resolución de Problemas', description: 'Enfoque creativo y analítico para la resolución de problemas y la mejora de procesos.' },
          { name: 'Autogestión y Organización', description: 'Habilidad para gestionar el tiempo y las prioridades, manteniendo el enfoque en los objetivos y plazos.' }
        ]
      }
    ]
  ]


  constructor(private themeService: ThemeService) {
    this.themeService.language$.subscribe(lang => {
      this.inicio = this.inicios[lang];
      this.experience = this.experiences[lang];
    });
  }

  showExp(i: number): void {
    this.experience[i].showed = !this.experience[i].showed;
  }

}
