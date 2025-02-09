import { Injectable } from '@angular/core';
import { Reserva } from '../../shared/models/reserva';

@Injectable({ providedIn: 'root' })
export class ReservaService {
  private reservasKey = 'reservaciones';

  obtenerReservas(): Reserva[] {
    console.log('Cargando reservaciones desde LocalStorage...'); // 🚀 Debugging
    return JSON.parse(localStorage.getItem(this.reservasKey) || '[]');
  }

  guardarReserva(reserva: Reserva): void {
    const reservas = this.obtenerReservas();
    reservas.push(reserva);
    localStorage.setItem(this.reservasKey, JSON.stringify(reservas));
    console.log('Reservación guardada:', reserva); // 🚀 Debugging
  }
}
