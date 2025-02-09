import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
 // ✅ Importamos QRCodeModule

@Component({
  selector: 'app-reservaciones',
  standalone: true,
  imports: [CommonModule], // ✅ Agregamos el módulo QR
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.scss']
})
export class ReservacionesComponent implements OnInit {
  reserva: any = null;
  qrData: string = ''; // Datos para el QR

  constructor(private router: Router) {}

  ngOnInit() {
    const state = history.state;
    if (state && state.reserva) {
      this.reserva = state.reserva;
      this.qrData = JSON.stringify(this.reserva); // ✅ Convertimos la reserva en JSON
    }
  }
}
