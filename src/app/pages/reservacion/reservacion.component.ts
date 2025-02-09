import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ IMPORTAR CommonModule
import { ReactiveFormsModule } from '@angular/forms'; // ✅ IMPORTAR ReactiveFormsModule

@Component({
  selector: 'app-reservacion',
  standalone: true, // Si el componente es standalone, importa los módulos aquí
  imports: [CommonModule, ReactiveFormsModule], // ✅ Agregar los módulos aquí
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent {
  reservaForm: FormGroup;
  mensaje: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.reservaForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      fecha: ['', Validators.required],
      personas: ['', [Validators.required, Validators.min(1), Validators.max(20)]],
      mensaje: ['']
    });
  }

  enviarReservacion() {
    if (this.reservaForm.valid) {
      const formData = this.reservaForm.value;

      // Redirige a la página de reservaciones con los datos
      this.router.navigate(['/reservaciones'], { state: { reserva: formData } });
    }
  }
}
