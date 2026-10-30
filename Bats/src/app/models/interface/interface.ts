export interface Murcielago {
  id: number;
  nombre: string;
  especie: string;
  descripcion: string;
  imagenUrl: string;
  esFavorito?: boolean; // Nuevo campo para el estado de favorito
}