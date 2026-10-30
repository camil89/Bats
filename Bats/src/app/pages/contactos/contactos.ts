import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactos.html',
  styleUrl: './contactos.css'
})
export class ContactosComponent {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';
  enviado: boolean = false;

  enviarMensaje() {
    if (this.nombre && this.mensaje) {
      this.enviado = true;
    }
  }
}