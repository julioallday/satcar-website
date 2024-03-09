import { DataService } from './../services/data.service';
import { Component } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';




@Component({
  selector: 'detalhes',
  standalone: true,
  imports: [],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent {

  veiculos: any = [];
  veiculo$: any;

  constructor(private dataService: DataService, private route: ActivatedRoute,
    private router: Router) {

    const veiculoId = Number(this.route.snapshot.paramMap.get('id'));
    this.veiculo$ = this.dataService.getVeiculo(veiculoId).subscribe((veiculo: any) => {
      this.veiculos.push(veiculo);
      console.log(veiculo);
    });



  }



}
