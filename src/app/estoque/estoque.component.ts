import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'estoque',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})
export class EstoqueComponent {

  veiculos = [
    {
      marca: 'Chevrolet',
      modelo: 'Onix',
      caracteristicas: 'LT 1.0 Flex 12V Automático',
      imagem: 'caminho-imagem',
      ano: '2021',
      combustivel: 'Flex',
      cor: 'Branco',
      km: '50000',
      portas: '4 portas',
      preco: '55.000,00',
      opcionais: 'Ar condicionado, Direção Hidráulica, Vidro Elétrico, Airbag, Alarme'
    },
    {
      marca: 'Ford',
      modelo: 'Ka',
      caracteristicas: 'SE 1.0 Flex 12V Mecânico',
      imagem: 'caminho-imagem',
      ano: '2020',
      combustivel: 'Flex',
      cor: 'Prata',
      km: '40000',
      portas: '4 portas',
      preco: '45.000,00',
      opcionais: 'Ar condicionado, Vidro Elétrico, Alarme, Travas Elétricas'
    },
    {
      marca: 'Volkswagen',
      modelo: 'Gol',
      caracteristicas: 'Trendline 1.6 Flex 12V Automático',
      imagem: 'caminho-imagem',
      ano: '2019',
      combustivel: 'Flex',
      cor: 'Vermelho',
      km: '30000',
      portas: '4 portas',
      preco: '48.000,00',
      opcionais: 'Ar condicionado, Direção Hidráulica, Vidro Elétrico, Airbag, Alarme'
    },
    {
      marca: 'Fiat',
      modelo: 'Argo',
      caracteristicas: 'Drive 1.3 Flex 12V Mecânico',
      imagem: 'caminho-imagem',
      ano: '2020',
      combustivel: 'Flex',
      cor: 'Azul',
      km: '35000',
      portas: '4 portas',
      preco: '50.000,00',
      opcionais: 'Ar condicionado, Direção Hidráulica, Vidro Elétrico, Alarme, Travas Elétricas'
    },
    {
      marca: 'Toyota',
      modelo: 'Yaris',
      caracteristicas: 'XL 1.5 Flex 16V Automático',
      imagem: 'caminho-imagem',
      ano: '2019',
      combustivel: 'Flex',
      cor: 'Cinza',
      km: '28000',
      portas: '4 portas',
      preco: '58.000,00',
      opcionais: 'Ar condicionado, Direção Hidráulica, Vidro Elétrico, Airbag, Alarme, Câmera de Ré'
    },
    {
      marca: 'Honda',
      modelo: 'Fit',
      caracteristicas: 'EX 1.5 Flex 16V Automático',
      imagem: 'caminho-imagem',
      ano: '2020',
      combustivel: 'Flex',
      cor: 'Branco',
      km: '32000',
      portas: '4 portas',
      preco: '65.000,00',
      opcionais: 'Ar condicionado, Direção Hidráulica, Vidro Elétrico, Airbag, Alarme, Bancos de Couro'
    },
    {
      marca: 'Renault',
      modelo: 'Kwid',
      caracteristicas: 'Life 1.0 Flex 12V Mecânico',
      imagem: 'caminho-imagem',
      ano: '2021',
      combustivel: 'Flex',
      cor: 'Amarelo',
      km: '25000',
      portas: '4 portas',
      preco: '40.000,00',
      opcionais: 'Ar condicionado, Direção Hidráulica, Vidro Elétrico, Alarme'
    }
  ];
}
