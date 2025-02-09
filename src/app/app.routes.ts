import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { ReservacionComponent } from './pages/reservacion/reservacion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ReservacionesComponent } from './pages/reservaciones/reservaciones.component';

export const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'actividades', component: ActividadesComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'reservacion', component: ReservacionComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'reservaciones', component: ReservacionesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirección a inicio
];
