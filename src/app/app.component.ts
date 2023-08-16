import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private subscription!: Subscription;

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.subscription = this.scrollService.scrollToSection$.subscribe(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
