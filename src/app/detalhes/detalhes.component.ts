import { NgClass, NgFor } from '@angular/common';
import { DataService } from './../services/data.service';
import { Component } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'detalhes',
  standalone: true,
  imports: [NgFor, NgClass, ReactiveFormsModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent {

  veiculoEscolhido: any;
  veiculo$: Observable<any>;

  urlImagens: string[] = [
    '../../assets/pexels-mike-bird-1007410.jpg',
    'https://source.unsplash.com/random/500x500',
    'https://source.unsplash.com/random/500x500',
    'https://source.unsplash.com/random/500x500',
    'https://source.unsplash.com/random/500x500'
  ];

  imagemPrincipal: string = this.urlImagens[0];
  chosenIdImagem: number = this.urlImagens.indexOf(this.imagemPrincipal);
  submitted = false;
  form: FormGroup;


  constructor(private dataService: DataService, private route: ActivatedRoute,
    private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.minLength(9)]],
      mensagem: ['', Validators.required]
    });


    const veiculoId = Number(this.route.snapshot.paramMap.get('id'));
    this.veiculo$ = this.dataService.getVeiculo(veiculoId).subscribe((veiculo: any) => {

      this.mostrarVeiculo(veiculo);
      return veiculo;
    });
    console.log(this.chosenIdImagem);

  }
  mostrarVeiculo(veiculo: any) {
    this.veiculoEscolhido = veiculo;
    console.log(this.veiculoEscolhido);
  }
  exibirImagem(url: string, index: number) {
    this.imagemPrincipal = url;

    this.chosenIdImagem = index;

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
    estou interessado(a) no veiculo ${this.veiculoEscolhido.marca} ${this.veiculoEscolhido.modelo} que vi no site,
    meu email é: ${dados.email},
    meu telefone é: ${dados.telefone} 
    e minha mensagem é:
    ${dados.mensagem}`;
    const encodedMessage = encodeURIComponent(mensagem);
    return `${baseURL}${encodedMessage}`;
  }
}
