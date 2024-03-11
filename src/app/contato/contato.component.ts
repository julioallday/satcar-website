import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'contato',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  form: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.minLength(9)]],
      mensagem: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      this.mensagemWhatsapp()

    } else {
      this.submitted = false;
      
    }
  }
  mensagemWhatsapp() {
    const dados = {
      nome: this.form.value.nome,
      email: this.form.value.email,
      telefone: this.form.value.telefone,
      mensagem: this.form.value.mensagem
    } 
    const url = this.criarURL(dados);
    window.open(url, '_blank');
  }
  private criarURL(dados: any): string {
    const baseURL = 'https://wa.me/5521982106192?text=';
    const mensagem = `Olá! Meu nome é ${dados.nome},
    venho por intermédio do  site,
    meu email é: ${dados.email},
    meu telefone é: ${dados.telefone} 
    e minha mensagem é:
    ${dados.mensagem}`;
    const encodedMessage = encodeURIComponent(mensagem);
    return `${baseURL}${encodedMessage}`;
  }
}
