import { Type } from "./Type";


export interface Transaccion {
    id: string;
    amount: number;
    date: Date;
    type: Type;
}
