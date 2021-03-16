import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import Nome from './models/nome.model';

@Injectable({
  providedIn: 'root'
})
export class NomesService {

  private listaDeNomes: Nome[] = []

  adicionar(nome: Nome) {
    this.listaDeNomes.push(nome)
  }

  obterTodos() {
    return of(this.listaDeNomes)
  }

  obterPorTipo(tipo: 'M' | 'F' ) {
    let listaParaRetorno = this.listaDeNomes
    .filter(nome => nome.tipo == tipo)

    return of(listaParaRetorno)
  }

  
}
