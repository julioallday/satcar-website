import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'input-buscador',
  standalone: true,
  imports: [NgFor],
  templateUrl: './input-buscador.component.html',
  styleUrl: './input-buscador.component.css'
})
export class InputBuscadorComponent {
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() opcoes: any[] = [];
}
