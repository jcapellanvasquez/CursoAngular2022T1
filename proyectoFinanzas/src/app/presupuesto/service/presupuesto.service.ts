import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      amount: [''],
      date: [''],
      type: ['']
    });
  }

  public salvarTransaccion(type: Types) {
    console.log(this.form.getRawValue())
  }

  public getTypes(type: Types): Type[] {
    return this.types.filter( t => t.type === type)
  }
}
