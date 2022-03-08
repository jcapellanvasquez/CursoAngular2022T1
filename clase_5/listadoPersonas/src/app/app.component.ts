import { Component, ViewChild } from '@angular/core';
import { ListadoComponent } from './listado/listado.component';
import { Persona } from './models/Persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listadoPersonas';
  public personas: Persona[] = [];

  @ViewChild(ListadoComponent)
  public lista: ListadoComponent = new ListadoComponent();

  public size() {
    console.log(this.lista.size())
  }
}

