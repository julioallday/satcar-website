import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DataService } from '../../services/data.service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'ofertas',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
  veiculos?: any[]
  veiculos$: Observable<any[]>;
  selectedId: number | undefined;

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
