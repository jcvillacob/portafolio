import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuActivate: boolean = false;

  activarMenu(): void {
    this.menuActivate = !this.menuActivate;
    console.log(this.menuActivate);
  }
}
