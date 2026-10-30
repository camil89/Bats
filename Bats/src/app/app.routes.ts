import { Routes } from '@angular/router';
import { CuevaComponent } from './pages/cueva/cueva';
import { ProductosComponent } from './pages/productos/productos';
import { ContactosComponent } from './pages/contactos/contactos'; // -- Acá debe decir ContactosComponent
import { AcercaDe } from './pages/acerca-de/acerca-de';
import { Notfound } from './pages/notfound/notfound';

export const routes: Routes = [
  { path: '', redirectTo: 'cueva', pathMatch: 'full' },
  { path: 'cueva', component: CuevaComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'contacto', component: ContactosComponent }, // -- Y acá también
  { path: 'acercade', component: AcercaDe },
  { path: '**', component: Notfound }
];