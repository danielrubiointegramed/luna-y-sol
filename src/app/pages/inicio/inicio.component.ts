import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule], // ✅ Importa RouterModule para navegación
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private router: Router) {} // ✅ Inyecta el servicio de Router

  navigateTo(path: string, event: MouseEvent) {
    event.preventDefault(); // ✅ Evita el comportamiento por defecto de los enlaces
    console.log('Navegando a:', path); // 🚀 Depuración

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
