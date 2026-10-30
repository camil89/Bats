import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Murcielago } from '../../models/interface/interface';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css'
})
export class ProductoCardComponent {
  @Input() item!: Murcielago;
  @Output() toggleFav = new EventEmitter<Murcielago>();

  onToggleFavorito() {
    this.toggleFav.emit(this.item);
  }
}