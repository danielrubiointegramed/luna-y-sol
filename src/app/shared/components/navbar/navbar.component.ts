import { Component } from '@angular/core';
import { Router }    from '@angular/router';
import { CommonModule } from '@angular/common';    // <-- NgIf, NgFor,...
import { RouterModule } from '@angular/router';     // <-- routerLink, routerLinkActive

@Component({
  selector: 'app-navbar',
  standalone: true,                              // <-- lo hacemos standalone
  imports: [ CommonModule, RouterModule ],        // <-- aquí los módulos
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMobileMenu = false;

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }

  navigateTo(path: string, event: Event): void {
    event.preventDefault();
    this.showMobileMenu = false;
    this.router.navigateByUrl(path)
      .catch(err => console.error('Error en el enrutamiento:', err));
  }
}
