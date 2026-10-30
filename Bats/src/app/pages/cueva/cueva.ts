import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cueva',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cueva.html',
  styleUrl: './cueva.css'
})
export class CuevaComponent {
 
  itemAbierto: number = 1;

  toggleItem(numero: number) {
    if (this.itemAbierto === numero) {
      this.itemAbierto = 0; 
    } else {
      this.itemAbierto = numero; 
    }
  }
}