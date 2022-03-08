import { Injectable } from '@angular/core';
import { Transaccion } from './models/Transaccion';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private trasancciones: Transaccion[] = [];
  
  constructor() { }

  public addTransaccion(tran: Transaccion) {
    this.trasancciones.push(tran);
  }

  public getTransacciones() {
    return this.trasancciones;
  }
}
