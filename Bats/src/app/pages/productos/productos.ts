import { Component } from '@angular/core';
import { Murcielago } from '../../models/interface/interface';
import { ProductoCardComponent } from '../../component/producto-card/producto-card';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [ProductoCardComponent],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class ProductosComponent {
  listaMurcielagos: Murcielago[] = [
    {
      id: 1,
      nombre: 'Murciélago Frutero',
      especie: 'Artibeus lituratus',
      descripcion: 'Excelente polinizador. Se alimenta principalmente de frutas silvestres y dispersa semillas.',
      imagenUrl: 'data:image/jpeg;base64,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',
      esFavorito: false
    },
    {
      id: 2,
      nombre: 'Murciélago Orejudo',
      especie: 'Plecotus auritus',
      descripcion: 'Famoso por sus enormes orejas que le facilitan capturar los sonidos más leves de insectos.',
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG0Gg_Zj-3s7uiMLlDPi_x5Aie56nacDFLy5acFFFKJg&s=10',
      esFavorito: false
    },
    {
      id: 3,
      nombre: 'Zorro Volador',
      especie: 'Pteropus vampyrus',
      descripcion: 'Uno de los murciélagos más grandes del mundo. Es estrictamente frugívoro y nocturno.',
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKNlNT0YItIbSq9py0VzkU7ykOrWTmblkm-dOUqQoow&s=10',
      esFavorito: false
    },
    {
      id: 4,
      nombre: 'Vampiro Común',
      especie: 'Desmodus rotundus',
      descripcion: 'El único mamífero adaptado a una dieta de sangre. Posee un complejo sistema de anticoagulantes.',
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr13OwzDk8H5iYQoiGaSltQY178IRIMuYJTQyMHDq0mg&s=10',
      esFavorito: false
    },
    {
      id: 5,
      nombre: 'Murciélago Nariz de Hoja',
      especie: 'Macrotus californicus',
      descripcion: 'Su distintiva hoja nasal le ayuda a direccionar los ultrasonidos de ecolocalización con gran precisión.',
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmiMSjRgnG6rZ-oD649p9InDMJlW8UxTBbF1O5cBu5Uw&s=10',
      esFavorito: false
    },
    {
      id: 6,
      nombre: 'Murciélago Pescador',
      especie: 'Noctilio leporinus',
      descripcion: 'Experto cazador acuático. Usa sus enormes garras para pescar pequeños peces en la superficie de los ríos.',
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3XkMCrMufxlsMJWA_JoIqv387TF1Jx_QO04ancCHphg&s=10',
      esFavorito: false
    },
    {
      id: 7,
      nombre: 'Murciélago Blanco Hondureño',
      especie: 'Ectophylla alba',
      descripcion: 'Pequeño y de pelaje blanco puro. Construye tiendas cortando hojas de heliconia para refugiarse en grupo.',
      imagenUrl: 'data:image/jpeg;base64,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',
      esFavorito: false
    },
    {
      id: 8,
      nombre: 'Murciélago Herradura',
      especie: 'Rhinolophus ferrumequinum',
      descripcion: 'Caracterizado por su estructura nasal en forma de herradura que emite ultrasonido a través de la nariz.',
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFlh41VR6yuEjgdg1FJ_a3r24S8E8OPxvw-OMUTc7mA&s=10',
      esFavorito: false
    },
    {
      id: 9,
      nombre: 'Murciélago de Gotham (Batman)',
      especie: 'Homo sapiens / Multimillonario nocturno',
      descripcion: 'No vuela por sí mismo, pero usa una capa tecnológica carísima. Le teme a los payasos y odia los lunes en Wayne Enterprises.',
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUXEiEaiJrXZjrc7M5gcZWjJgRVF-rl_c8mTOvSQjEw&s=10',
      esFavorito: false
    },
    {
      id: 10,
      nombre: 'Murciélago Vampiro de Patas Hudas',
      especie: 'Diphylla ecaudata',
      descripcion: 'Pariente del vampiro común, se especializa casi exclusivamente en alimentarse de sangre de aves silvestres en zonas selváticas.',
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fpOBwFrE2ZS1AOzFgbltGWGjz_WfyeK1NTcxSMZrUA&s=10',
      esFavorito: false
    },
    {
      id: 11,
      nombre: 'Murciélago de Bulbo',
      especie: 'Eumops perotis',
      descripcion: 'Uno de los murciélagos insectívoros más grandes de América. Emite llamadas ultrasónicas tan potentes que los humanos pueden llegar a percibirlas.',
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ13leMCRFElePgJMtDKRDIKixEoYt5cYRc2ASeVwwjfgJxOel6eNIyeFI&s=10',
      esFavorito: false
    },
    {
      id: 12,
      nombre: 'Murciélago Arlequín',
      especie: 'Scotomanes ornatus',
      descripcion: 'Reconocido por su llamativo e inusual pelaje moteado en tonos naranjas y marrones brillantes que le otorgan un aspecto único.',
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJXbhwuf_seVvHnGUZfo7Naj2ng5gxEowk4ftMTNfSg&s=10',
      esFavorito: false
    }
  ];

  favoritosCount: number = 0;

  actualizarFavorito(item: Murcielago) {
    item.esFavorito = !item.esFavorito;
    this.favoritosCount = this.listaMurcielagos.filter(m => m.esFavorito).length;
  }
}