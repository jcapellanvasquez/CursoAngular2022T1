import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Type } from 'src/app/models/Type';
import { Types } from 'src/app/models/Types';
import { PresupuestoService } from '../service/presupuesto.service';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent implements OnInit {
  public types: Type[] = [];
  constructor(private appService: AppService, public presupuestoService: PresupuestoService) { }

  ngOnInit(): void {
    this.types = this.presupuestoService.getTypes(Types.GASTO)
  }
  salvar() {
    this.presupuestoService.salvarTransaccion(Types.GASTO)
  }
}
