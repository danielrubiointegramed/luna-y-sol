import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { ExploraComponent } from './pages/explora/explora.component';
import { GraciasComponent } from './pages/gracias/gracias.component';
import { ReservacionComponent } from './pages/reservacion/reservacion.component';

export const routes: Routes = [
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'explora', component: ExploraComponent },
  { path: 'gracias', component: GraciasComponent },
  { path: 'reservacion', component: ReservacionComponent },
  { path: '**', redirectTo: 'contactanos' } // Redirección por defecto
];
