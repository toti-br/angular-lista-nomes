import { Component, OnInit } from '@angular/core';
import { NomesService } from '../nomes.service';

@Component({
  selector: 'app-entrada-de-nomes',
  templateUrl: './entrada-de-nomes.component.html',
  styleUrls: ['./entrada-de-nomes.component.css']
})
export class EntradaDeNomesComponent implements OnInit {

  constructor(private nomesService: NomesService) { }

  nome: string = ""
  tipo: 'M' | 'F' = 'M'

  ngOnInit(): void {
  }

  adicionarNome() {

    let nome = {
      nome: this.nome,
      tipo: this.tipo
    }

    this.nomesService.adicionar(nome)
  }

}
