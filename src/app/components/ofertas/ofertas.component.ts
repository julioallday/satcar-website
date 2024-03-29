import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DataService } from '../../services/data.service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'ofertas',
  standalone: true,
  imports: [NgFor, NgClass, RouterLink],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
  veiculos?: any[]
  veiculos$: Observable<any[]>;
  selectedId: string | undefined;

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {
    this.veiculos$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = String(params.get('id'));
        // console.log(this.veiculos$);
        return this.dataService.getVeiculos();

      })
    );
    this.listarVeiculos(this.veiculos$);

  }

  listarVeiculos(veiculos: Observable<any[]>) {
    veiculos.subscribe((veiculos: any) => {
      this.veiculos = veiculos?.map((veiculo: any, index: number) => {
        const obj = {
          ...veiculo,
        }
        return obj;
      });

      console.log(this.veiculos);
    });



  }
  navegarVeiculo(id: string): void {

    this.router.navigate(['estoque/detalhes', String(id)]);
  }

}

