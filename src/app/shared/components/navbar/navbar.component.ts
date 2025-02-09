import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true, // ✅ Necesario si es un componente independiente
  imports: [RouterModule, CommonModule], // ✅ Asegura que RouterModule esté importado
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateTo(path: string, event: Event) {
    event.preventDefault();
    console.log('Clic detectado en:', path);
    this.router.navigateByUrl(path).then(success => {
      if (success) {
        console.log('Navegación exitosa a:', path);
      } else {
        console.error('Error en la navegación a:', path);
      }
    }).catch(error => {
      console.error('Error en el enrutamiento:', error);
    });
  }
}
