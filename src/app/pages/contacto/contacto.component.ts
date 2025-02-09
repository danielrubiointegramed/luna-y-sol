import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // ✅ Evita errores de formGroup y *ngIf
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactoForm: FormGroup;
  mensaje: string = '';

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  enviarContacto() {
    if (this.contactoForm.valid) {
      const formData = this.contactoForm.value;

      const emailParams = {
        to_name: 'Equipo de Soporte',
        from_name: formData.nombre,
        from_email: formData.correo,
        message: `
          Nuevo mensaje de contacto:
          - Nombre: ${formData.nombre}
          - Correo: ${formData.correo}
          - Mensaje: ${formData.mensaje}
        `
      };

      emailjs.send('service_id', 'template_id', emailParams, 'user_id')
        .then(() => {
          this.mensaje = '¡Mensaje enviado con éxito!';
          this.contactoForm.reset();
        })
        .catch(error => {
          console.error('Error al enviar el mensaje:', error);
          this.mensaje = 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.';
        });
    }
  }
}
