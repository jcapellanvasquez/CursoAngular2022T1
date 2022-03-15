import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Transaccion } from 'src/app/models/Transaccion';
import { Type } from 'src/app/models/Type';
import { Types } from 'src/app/models/Types';

@Injectable()
export class PresupuestoService {
  public form: FormGroup;
  public types: Type[] = [
    {
      name: "Transaporte", type: Types.GASTO
    },
    {
      name: "Cobro nomina", type: Types.INGRESO
    }
  ]

  constructor(private formBuilder: FormBuilder, private appSrv: AppService) {
    this.form = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.min(10)]],
      date: [''],
      type: ['']
    });
  }

  public salvarTransaccion() {
    //** Agregar validación **//

    console.log(this.form)
    if (this.form.valid) {
      const tran: Transaccion = {
        id: this.getId(),
        amount: this.form.get("amount")?.value,
        date: this.form.get("date")?.value, 
        type: this.form.get("type")?.value
      };
  
      this.appSrv.addTransaccion(tran)
    } 
    else {
      this.form.markAllAsTouched()
    }
  }

  public getTypes(type: Types): Type[] {
    return this.types.filter( t => t.type === type)
  }


  private getId(): string {
    return Math.random().toString().substr(2);
  }

  get amount() {
    return this.form.get("amount")
  }
  
  get date() {
    return this.form.get("date")
  }
  
  get type() {
    return this.form.get("type")
  }
}
