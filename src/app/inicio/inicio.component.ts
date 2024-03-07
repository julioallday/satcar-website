import { Component } from '@angular/core';
import { CarrosselComponent } from '../components/carrossel/carrossel.component';

@Component({
  selector: 'inicio',
  standalone: true,
  imports: [CarrosselComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
