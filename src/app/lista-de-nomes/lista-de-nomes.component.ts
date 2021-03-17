import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import Nome from '../models/nome.model';
import { NomesService } from '../nomes.service';

@Component({
  selector: 'app-lista-de-nomes',
  templateUrl: './lista-de-nomes.component.html',
  styleUrls: ['./lista-de-nomes.component.css']
})
export class ListaDeNomesComponent implements OnInit, OnDestroy {

  @Input('tipo') tipoExtenso: "menino" | "menina" | "" = ""
  nomes: Nome[] = []
  sub: any = null

  constructor(private nomesService: NomesService) { }

  ngOnInit(): void {
    this.atualizarListaDeNomes()
    this.sub = this.nomesService.nomesAtualizados()   // recebe novos valores toda vez
     /// que os nomes são atualizados
    .subscribe(() => this.atualizarListaDeNomes() ) // atualizar a lista que está
    // dentro do componente
  }

  atualizarListaDeNomes() {
    const tipo = this.tipoExtenso == "menino" ? "M" : "F"
      
    this.nomesService.obterPorTipo(tipo)
    .subscribe(listaDeNomes => this.nomes = listaDeNomes)
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
