import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Persona } from '../models/Persona';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input()
  persona: Persona = {
    id:0,
    titulo: '',
    nombre: '',
    bio: '',
    fechaRegistro: new Date()
  }

  @Output()
  public onBorrar: EventEmitter<Persona> = new EventEmitter<Persona>();
  

  @ViewChild('child')
  child: any;


  constructor() { }

  ngOnInit(): void {
  }

  borrar() {
    this.onBorrar.emit(this.persona);
  }

  accion() {
    this.child.nativeElement.innerHTML = 'CONTENIDO VIEW CHILD';
    console.log(this.child.nativeElement)
  }
}
