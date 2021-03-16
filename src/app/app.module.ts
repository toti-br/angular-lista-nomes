import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaDeNomesComponent } from './lista-de-nomes/lista-de-nomes.component';
import { EntradaDeNomesComponent } from './entrada-de-nomes/entrada-de-nomes.component';
import { TesteServicoComponent } from './teste-servico/teste-servico.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeNomesComponent,
    EntradaDeNomesComponent,
    TesteServicoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
