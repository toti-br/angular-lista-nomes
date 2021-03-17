import { Component, OnInit } from '@angular/core';
import Nome from '../models/nome.model';
import { NomesService } from '../nomes.service';

@Component({
  selector: 'app-teste-servico',
  templateUrl: './teste-servico.component.html',
  styleUrls: ['./teste-servico.component.css']
})
export class TesteServicoComponent implements OnInit {



  nomes: Nome[] = []

  nomesTipoF: Nome[] = []

  constructor(private nomesService: NomesService) { }

  ngOnInit(): void {
    this.nomesService.obterTodos().subscribe((nomes) => {
      this.nomes = nomes
    })
  }

  adicionar() {
    this.nomesService.adicionar({nome: 'Batata', tipo: 'M'})
    this.nomesService.adicionar({nome: 'Arroz', tipo: 'F'})
  }

  obterTipoF() {
    this.nomesService.obterPorTipo('F').subscribe((nomes) => {
      this.nomesTipoF = nomes
    })
  }

}
