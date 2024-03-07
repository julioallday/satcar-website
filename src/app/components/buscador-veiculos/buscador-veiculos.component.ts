import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { InputBuscadorComponent } from '../input-buscador/input-buscador.component';

@Component({
  selector: 'buscador-veiculos',
  standalone: true,
  imports: [InputBuscadorComponent, NgFor],
  templateUrl: './buscador-veiculos.component.html',
  styleUrl: './buscador-veiculos.component.css'
})
export class BuscadorVeiculosComponent {

  dadosInputs = [
    {
      label: 'Marca',
      opcoes: [
        {

          nome: 'Honda',
          valor: 'honda'
        },
        {
          nome: 'BMW',
          valor: 'bmw'
        }
      ]
    },
    {
      label: 'Modelo',
      opcoes: [
        {
          nome: 'Modelo 1',
          valor: 'Modelo 1'
        },
        {
          nome: 'Modelo 2',
          valor: 'Modelo 2'
        }
      ]
    },
    {
      label: 'Preço de',
      opcoes: [{
        nome: 'Até R$ 10.000,00',
        valor: '10000'
      }, {
        nome: 'De R$ 10.000,00 até R$ 20.000,00',
        valor: '10000-20000'
      },
      {
        nome: 'De R$ 20.000,00 até R$ 30.000,00',
        valor: '20000-30000'
      },
      {
        nome: 'De R$ 30.000,00 até R$ 40.000,00',
        valor: '30000-40000'
      }

      ]
    },
    {
      label: 'Preço até',
      opcoes: [{
        nome: 'Até R$ 10.000,00',
        valor: '10000'
      }, {
        nome: 'De R$ 10.000,00 até R$ 20.000,00',
        valor: '10000-20000'
      },
      {
        nome: 'De R$ 20.000,00 até R$ 30.000,00',
        valor: '20000-30000'
      },
      {
        nome: 'De R$ 30.000,00 até R$ 40.000,00',
        valor: '30000-40000'
      }

      ]
    }
  ]





}
