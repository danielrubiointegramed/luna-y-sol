import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMobileMenu = false; // Estado del menú móvil

  constructor(private router: Router) {}

  // Alterna el menú móvil
  toggleMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }

  // Navega a la ruta y oculta el menú
  navigateTo(path: string, event: Event): void {
    event.preventDefault();
    this.showMobileMenu = false; // Oculta el menú móvil
    this.router.navigateByUrl(path)
      .then(success => {
        if (success) {
          console.log('Navegación exitosa a:', path);
        } else {
          console.error('Error en la navegación a:', path);
        }
      })
      .catch(error => {
        console.error('Error en el enrutamiento:', error);
      });
  }
}
