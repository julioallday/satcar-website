import { Component } from '@angular/core';
import { CarrosselComponent } from '../components/carrossel/carrossel.component';
import { BuscadorVeiculosComponent } from '../components/buscador-veiculos/buscador-veiculos.component';

@Component({
  selector: 'inicio',
  standalone: true,
  imports: [CarrosselComponent,BuscadorVeiculosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
