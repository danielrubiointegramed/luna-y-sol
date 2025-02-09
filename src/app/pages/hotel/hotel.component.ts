import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [RouterModule], // 🚀 Importa RouterModule si usas navegación
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {}
