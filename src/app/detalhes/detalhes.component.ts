import { NgClass, NgFor } from '@angular/common';
import { DataService } from './../services/data.service';
import { Component } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';




@Component({
  selector: 'detalhes',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent {

  veiculoEscolhido: any;
  veiculo$: Observable<any>;

  urlImagens: string[] = [
    '../../assets/pexels-mike-bird-1007410.jpg',
    'https://source.unsplash.com/random/500x500',
    'https://source.unsplash.com/random/500x500',
    'https://source.unsplash.com/random/500x500',
    'https://source.unsplash.com/random/500x500'
  ];

  imagemPrincipal: string = this.urlImagens[0];
  chosenIdImagem: number = this.urlImagens.indexOf(this.imagemPrincipal);


  constructor(private dataService: DataService, private route: ActivatedRoute,
    private router: Router) {

    const veiculoId = Number(this.route.snapshot.paramMap.get('id'));
    this.veiculo$ = this.dataService.getVeiculo(veiculoId).subscribe((veiculo: any) => {

      this.mostrarVeiculo(veiculo);
      return veiculo;
    });
    console.log(this.chosenIdImagem);

  }
  mostrarVeiculo(veiculo: any) {
    this.veiculoEscolhido = veiculo;
    console.log(this.veiculoEscolhido);
  }
  exibirImagem(url: string, index: number) {
    this.imagemPrincipal = url;

    this.chosenIdImagem = index;

  }
}
