import { NgFor } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'painel-marcas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './painel-marcas.component.html',
  styleUrl: './painel-marcas.component.css'
})
export class PainelMarcasComponent {
  marcas: any[] = [
    {
      id: 1,
      nome: 'Volkswagen',
      imagem: 'https://source.unsplash.com/random/400x400'
    },
    {
      id: 2,
      nome: 'Toyota',
      imagem: 'https://source.unsplash.com/random/400x400'
    },
    {
      id: 3,
      nome: 'Ford',
      imagem: 'https://source.unsplash.com/random/400x400'
    },
    {
      id: 4,
      nome: 'Chevrolet',
      imagem: 'https://source.unsplash.com/random/400x400'
    },
    {
      id: 5,
      nome: 'Honda',
      imagem: 'https://source.unsplash.com/random/400x400'
    },
    {
      id: 6,
      nome: 'Nissan',
      imagem: 'https://source.unsplash.com/random/400x400'
    },
    {
      id: 7,
      nome: 'Hyundai',
      imagem: 'https://source.unsplash.com/random/400x400'
    },
    {
      id: 8,
      nome: 'Kia',
      imagem: 'https://source.unsplash.com/random/400x400'
    },

  ]

}
