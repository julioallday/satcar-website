import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'header',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isTransparent = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Verifica a posição de rolagem da página
    const verticalOffset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Defina um valor de limite, por exemplo, 100 pixels
    const limit = 110;

    // Se a posição de rolagem for maior que o limite, adiciona uma classe para cor sólida
    if (verticalOffset > limit) {
      this.isTransparent = false;
    } else {
      this.isTransparent = true;

    }
  }

}
