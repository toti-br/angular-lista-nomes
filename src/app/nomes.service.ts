import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import Nome from './models/nome.model';

@Injectable({
  providedIn: 'root'
})
export class NomesService {

  private nomesEvento$ = new Subject<boolean>()

  private listaDeNomes: Nome[] = [
    { nome: "Ronaldo", tipo: "M"},
    { nome: "Batata", tipo: "F"},
    { nome: "Cristiano", tipo: "M"}
  ]

  adicionar(nome: Nome) {
    this.listaDeNomes.push(nome) // acrescentar nome na lista

    this.nomesEvento$.next(true) // notificando componentes que a lista foi atualizada
  }

  obterTodos() {
    return of(this.listaDeNomes)
  }

  nomesAtualizados() {
    return this.nomesEvento$.asObservable()
  }

  obterPorTipo(tipo: 'M' | 'F' ) {
    let listaParaRetorno = this.listaDeNomes
    .filter(nome => nome.tipo == tipo)

    return of(listaParaRetorno)
  }

  
}
