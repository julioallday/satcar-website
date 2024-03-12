import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getVeiculos(): Observable<any[]> {
    return this.http.get<any[]>('../../assets/veiculos.json');
  }
  getVeiculo(id: string): any {
    return this.http.get<any[]>('../../assets/veiculos.json').pipe(
      map((listaDeVeiculos: any[]) => listaDeVeiculos.find((el: any) => el.id == id))
    )
  }
  flitraVeiculo() {

  }
}
