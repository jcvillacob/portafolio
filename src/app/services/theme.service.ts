import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private languageSource = new BehaviorSubject<number>(0);
  language$ = this.languageSource.asObservable();

  getLanguage(): number {
    return this.languageSource.value;
  }

  toggleLanguage(language: number) {
    this.languageSource.next(language);
  }

  setTheme(theme: { [key: string]: string }) {
    for (const key in theme) {
      document.documentElement.style.setProperty(key, theme[key]);
    }
  }
}
