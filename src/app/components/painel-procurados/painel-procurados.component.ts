import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'painel-procurados',
  standalone: true,
  imports: [NgFor],
  templateUrl: './painel-procurados.component.html',
  styleUrl: './painel-procurados.component.css'
})
export class PainelProcuradosComponent {

  imagens = [
    {
      reference: "../../../assets/pexels-mike-bird-1007410.jpg",
      id:1
    },
    {
      reference: "https://source.unsplash.com/random/360x360",
      id: 2
    },
    {
      reference: "https://source.unsplash.com/random/360x360",
      id: 3
    },
    {
      reference: "https://source.unsplash.com/random/360x360",
      id: 4
    },
  ]

}
