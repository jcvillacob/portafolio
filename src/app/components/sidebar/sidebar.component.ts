import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { ThemeService } from 'src/app/services/theme.service';


type ThemeName = 'dark' | 'warm' | 'professional' | 'fresh';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  logo = 'assets/jv_navbar.svg';
  menuActivate: boolean = false;
  items: any[] = [
    {name: 'HOME', id: 'home'},
    {name: 'ABOUT', id: 'about'},
    {name: 'EXPERIENCE', id: 'experience'},
    {name: 'SKILLS', id: 'skills'},
    {name: 'PORTFOLIO', id: 'portfolio'},
    {name: 'CONTACT', id: 'contact'},
  ]
  themes = {
    dark: {
      '--px-theme': '#FF5733',
      '--px-theme-2': '#C70039',
      '--px-white': '#C0C0C0',
      '--px-white-rgb': '192,192,192',
      '--px-text': '#F5E6E8',
      '--px-heading': '#F0E3E4',
      '--px-bg': '#1C1C1C',
      '--px-dark':'#121212'
    },
    warm: {
      '--px-theme': '#FFA726',
      '--px-theme-2': '#D84315',
      '--px-white': '#FAF3E0',
      '--px-white-rgb': '250,243,224',
      '--px-text': '#5D4037',
      '--px-heading': '#4E342E',
      '--px-bg': '#FBE9E7',
      '--px-dark':'#BCAAA4'
    },
    professional: {
      '--px-theme': '#1E88E5',
      '--px-theme-2': '#1976D2',
      '--px-white': '#f4f6f8',
      '--px-white-rgb': '244,246,248',
      '--px-text': '#2C3E50',
      '--px-heading': '#1A252C',
      '--px-bg': '#ECEFF1',
      '--px-dark':'#B0BEC5'
    },
    fresh: {
      '--px-theme': '#56CCF2',
      '--px-theme-2': '#2F80ED',
      '--px-white': '#fff',
      '--px-white-rgb': '255,255,255',
      '--px-text': '#333333',
      '--px-heading': '#222222',
      '--px-bg': '#f5f5f5',
      '--px-dark':'#e0e0e0'
    }
  };
  

  constructor(private scrollService: ScrollService, private themeService: ThemeService) {}

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }

  activarMenu(): void {
    this.menuActivate = !this.menuActivate;
  }

  changeTheme(themeName: ThemeName) {
    this.themeService.setTheme(this.themes[themeName]);
    if(themeName === 'dark') {
      this.logo = 'assets/jv_navbarWhite.svg';
    } else {
      this.logo = 'assets/jv_navbar.svg';
    }
  }  
}
