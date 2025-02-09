import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaService } from '../../core/services/reserva.service';
import { Reserva } from '../../shared/models/reserva';

@Component({
  selector: 'app-reservaciones',
  standalone: true,
  imports: [CommonModule],
  providers: [ReservaService], // ✅ Agregamos el servicio a los providers
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.scss']
})
export class ReservacionesComponent implements OnInit {
  reservaService = inject(ReservaService);
  reservas: Reserva[] = [];

  ngOnInit() {
    console.log('Obteniendo reservaciones...'); // 🚀 Debugging
    this.reservas = this.reservaService.obtenerReservas();
    console.log('Reservaciones cargadas:', this.reservas); // 🚀 Debugging
  }
}
