import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NomesService } from '../nomes.service';

@Component({
  selector: 'app-entrada-de-nomes',
  templateUrl: './entrada-de-nomes.component.html',
  styleUrls: ['./entrada-de-nomes.component.css']
})
export class EntradaDeNomesComponent implements OnInit {

  constructor(private nomesService: NomesService) { }

  nome: string = ""
  tipo: 'M' | 'F' | '' = ''

  ngOnInit(): void {
  }

  adicionarNome() {
    if (this.tipo && this.nome) {
      let nome = {
        nome: this.nome,
        tipo: this.tipo
      }

      this.nomesService.adicionar(nome)
    } else {
      alert('Precisa selecionar um tipo e escrever um nome!')
    }


    this.nomesService.obterTodos().subscribe(lista => console.log(lista))
  }

}
