import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.scss']
})
export class ReservacionesComponent implements OnInit {
  reserva: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const state = history.state;
    if (state && state.reserva) {
      this.reserva = state.reserva;
    }
  }
}
