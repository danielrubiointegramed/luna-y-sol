import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [RouterModule], // 🚀 Importa RouterModule si usas navegación
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent {}

