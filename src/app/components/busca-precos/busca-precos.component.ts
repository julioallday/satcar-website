import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'busca-precos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './busca-precos.component.html',
  styleUrl: './busca-precos.component.css'
})
export class BuscaPrecosComponent {
  dados: any[] = [
    {
      preco: "R$ 20.000,00",
    },
    {
      preco: "R$ 35.000,00",
    },
    {
      preco: "R$ 50.000,00",
    },
    {
      preco: "R$ 80.000,00",
    },
  ]

}
