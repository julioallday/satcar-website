import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'contato',
  standalone: true,
  imports: [NgClass],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  isEnabled = false;

  toggleEnabled() {
    this.isEnabled = !this.isEnabled;
  }

}
