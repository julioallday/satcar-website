import { DataService } from './../services/data.service';
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DetalhesComponent } from '../detalhes/detalhes.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import {  switchMap } from 'rxjs/operators';


@Component({
  selector: 'estoque',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink,RouterOutlet],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})
export class EstoqueComponent {

  veiculos: any[]= [];

  filtros = [
    {
      label: 'Marca',
      opcoes: ['Chevrolet', 'Ford', 'Volkswagen', 'Fiat', 'Toyota', 'Honda', '  Renault']
    },
    {
      label: 'Modelo',
      opcoes: ['Onix', 'Ka', 'Gol', 'Argo', 'Yaris', 'Fit', 'Kwid']
    },
    {
      label: 'Preço',
      opcoes: ['Até R$20.000,00', 'Até R$35.000,00', 'Até R$50.000,00', 'Até R$80.000,00',]
    },


  ]


  veiculos$: Observable<any[]>;
  selectedId: number | undefined ;


  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {
    this.veiculos$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get('id'));
        // console.log(this.veiculos$);
        return this.dataService.getVeiculos();

      })
      );
      this.listarVeiculos(this.veiculos$);

  }
  listarVeiculos(veiculos: Observable<any[]>) {
    veiculos.subscribe((veiculos: any) => {
      this.veiculos = veiculos;
    });

  }
  navegarVeiculo(id: number): void {
    this.router.navigate(['estoque/detalhes', String(id)]);
  }
}
