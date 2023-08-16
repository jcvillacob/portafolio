import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuActivate: boolean = false;
  items: any[] = [
    {name: 'HOME', id: 'home'},
    {name: 'ABOUT', id: 'about'},
    {name: 'EXPERIENCE', id: 'experience'},
    {name: 'SKILLS', id: 'skills'},
    {name: 'PORTFOLIO', id: 'portfolio'},
    {name: 'CONTACT', id: 'contact'},
  ]

  constructor(private scrollService: ScrollService) {}

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }

  activarMenu(): void {
    this.menuActivate = !this.menuActivate;
    console.log(this.menuActivate);
  }
}
