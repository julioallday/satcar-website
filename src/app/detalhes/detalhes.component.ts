import { Component } from '@angular/core';




@Component({
  selector: 'detalhes',
  standalone: true,
  imports: [],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent {

  veiculo = {
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
  };

}
