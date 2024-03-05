import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnDestroy {
  language!: Observable<number>;
  general: any = {};
  generals: any[] = [
    {subtitle: 'Experience', title: 'MY EXPERIENCE', paragraph: 'My career path includes diverse roles such as teaching teenage students and managing a bar, reflecting my ability to adapt and lead in various environments.'},
    {subtitle: 'Experiencia', title: 'MI EXPERIENCIA', paragraph: 'Mi trayectoria profesional incluye roles diversos como enseñar a estudiantes adolescentes y gestionar un bar, reflejando mi capacidad para adaptarme y liderar en varios entornos.'}
  ];

  private languageSubscription: Subscription;

  constructor(private themeService: ThemeService) {
    this.language = this.themeService.language$;
    this.languageSubscription = this.language.subscribe(lang => {
      this.general = this.generals[lang];
    });
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}
