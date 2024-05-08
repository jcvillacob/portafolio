import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ScrollService } from 'src/app/services/scroll.service';
import { ThemeService } from 'src/app/services/theme.service';
import { gsap } from 'gsap';

type ThemeName = 'dark' | 'warm' | 'professional' | 'fresh';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @ViewChild('sidebarContainer') sidebarContainer!: ElementRef;
  @ViewChildren('listItem') listItems!: QueryList<ElementRef>;
  language!: number;
  items!: any[];
  logo = 'assets/jv_navbar.svg';
  elementos: any[] = [
    [
      { name: 'HOME', id: 'home' },
      { name: 'ABOUT', id: 'about' },
      { name: 'EXPERIENCE', id: 'experience' },
      { name: 'SKILLS', id: 'skills' },
      { name: 'PORTFOLIO', id: 'portfolio' },
      { name: 'CONTACT', id: 'contact' },
    ],
    [
      { name: 'HOME', id: 'home' },
      { name: 'SOBRE ME', id: 'about' },
      { name: 'EXPERIENCIA', id: 'experience' },
      { name: 'HABILIDADES', id: 'skills' },
      { name: 'PORTAFOLIO', id: 'portfolio' },
      { name: 'CONTACTO', id: 'contact' },
    ],
  ];
  menuActivate: boolean = false;
  themes = {
    dark: {
      '--px-theme': '#FF5733',
      '--px-theme-2': '#C70039',
      '--px-white': '#C0C0C0',
      '--px-white-rgb': '192,192,192',
      '--px-text': '#F5E6E8',
      '--px-heading': '#F0E3E4',
      '--px-bg': '#1C1C1C',
      '--px-dark': '#121212',
    },
    warm: {
      '--px-theme': '#FFA726',
      '--px-theme-2': '#D84315',
      '--px-white': '#FAF3E0',
      '--px-white-rgb': '250,243,224',
      '--px-text': '#5D4037',
      '--px-heading': '#4E342E',
      '--px-bg': '#FBE9E7',
      '--px-dark': '#BCAAA4',
    },
    professional: {
      '--px-theme': '#1E88E5',
      '--px-theme-2': '#1976D2',
      '--px-white': '#f4f6f8',
      '--px-white-rgb': '244,246,248',
      '--px-text': '#2C3E50',
      '--px-heading': '#1A252C',
      '--px-bg': '#ECEFF1',
      '--px-dark': '#B0BEC5',
    },
    fresh: {
      '--px-theme': '#56CCF2',
      '--px-theme-2': '#2F80ED',
      '--px-white': '#fff',
      '--px-white-rgb': '255,255,255',
      '--px-text': '#333333',
      '--px-heading': '#222222',
      '--px-bg': '#f5f5f5',
      '--px-dark': '#e0e0e0',
    },
  };

  constructor(
    private scrollService: ScrollService,
    private themeService: ThemeService
  ) {
    this.themeService.language$.subscribe((lang) => {
      this.language = lang;
      this.items = this.elementos[lang];
    });
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }

  // ! Problema con el cambio de idioma cuando está en pantalla grande
  activarMenu(): void {
    this.menuActivate = !this.menuActivate;

    if (this.menuActivate) {
      // Anima el sidebar rápidamente
      gsap.to(this.sidebarContainer.nativeElement, {
        left: 0,
        duration: 0.2,
      });

      // Anima los elementos de la lista con un retraso y moviéndolos desde la izquierda
      this.listItems.forEach((li, index) => {
        gsap.fromTo(
          li.nativeElement,
          {
            left: '-40px', // Inicia fuera de la vista
            opacity: 0,
          },
          {
            left: 0, // Termina en posición natural
            opacity: 1,
            delay: 0.2 + index * 0.1, // Aumenta el retraso para cada elemento
            duration: 0.5,
          }
        );
      });
    } else {
      // Anima primero los elementos de la lista antes de cerrar el sidebar
      this.listItems.forEach((li, index) => {
        gsap.to(li.nativeElement, {
          left: '-40px',
          opacity: 0,
          duration: 0.5,
          delay: 0.1 * index, // Incrementa el retraso de forma inversa
        });
      });

      // Espera a que los elementos se oculten antes de cerrar el sidebar
      gsap.to(this.sidebarContainer.nativeElement, {
        left: '-285px',
        delay: 0.5, // Espera que todos los elementos se oculten
        duration: 0.5,
      });
    }
  }

  changeTheme(themeName: ThemeName) {
    this.themeService.setTheme(this.themes[themeName]);
    if (themeName === 'dark') {
      this.logo = 'assets/jv_navbarWhite.svg';
    } else {
      this.logo = 'assets/jv_navbar.svg';
    }
  }

  // ! Problema con el cambio de idioma cuando está en pantalla grande
  changeLanguage(lang: number) {
    this.activarMenu();
    setTimeout(() => {
      this.themeService.toggleLanguage(lang);
    }, 500);
  }
}
