import { Component } from '@angular/core';
import { CarrosselComponent } from '../components/carrossel/carrossel.component';
import { BuscadorVeiculosComponent } from '../components/buscador-veiculos/buscador-veiculos.component';
import { InputBuscadorComponent } from '../components/input-buscador/input-buscador.component';
import { PainelDescubraComponent } from '../components/painel-descubra/painel-descubra.component';
import { PainelProcuradosComponent } from '../components/painel-procurados/painel-procurados.component';
import { PainelMarcasComponent } from '../components/painel-marcas/painel-marcas.component';

@Component({
  selector: 'inicio',
  standalone: true,
  imports: [CarrosselComponent,
    BuscadorVeiculosComponent,
    InputBuscadorComponent,
    PainelDescubraComponent,
    PainelProcuradosComponent,
    PainelMarcasComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
