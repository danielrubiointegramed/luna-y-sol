import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmailService {
  mensaje = signal<string>('');

  enviarCorreo(destinatario: string, asunto: string, cuerpo: string) {
    (window as any).Email.send({
      SecureToken: 'AQUI_TU_SECURE_TOKEN',
      To: destinatario,
      From: 'tu-email@dominio.com',
      Subject: asunto,
      Body: cuerpo
    }).then((message: string) => {
      this.mensaje.set(message);
    }).catch(() => {
      this.mensaje.set('Error al enviar el correo.');
    });
  }
}
