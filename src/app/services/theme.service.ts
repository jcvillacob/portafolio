import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  setTheme(theme: { [key: string]: string }) {
    console.log(theme); // Agrega esta línea
    for (const key in theme) {
      document.documentElement.style.setProperty(key, theme[key]);
    }
  }
}
