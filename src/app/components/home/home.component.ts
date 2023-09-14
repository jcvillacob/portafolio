import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private scrollService: ScrollService) {}

  scrollToSection(): void {
    this.scrollService.scrollToSection('contact');
  }
}
