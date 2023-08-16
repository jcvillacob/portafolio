import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollToSectionSubject = new Subject<string>();
  public scrollToSection$ = this.scrollToSectionSubject.asObservable();

  scrollToSection(sectionId: string): void {
    this.scrollToSectionSubject.next(sectionId);
  }
}
