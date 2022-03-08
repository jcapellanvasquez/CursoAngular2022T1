import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe'
})
export class MiPipePipe implements PipeTransform {

  transform(value: string, args: number): unknown {
    if (value.length === 11 && args === 1) {
      const cedulaGrupo1 = value.substr(0,3)
      const cedulaGrupo2 = value.substr(3,7)
      const cedulaGrupo3 = value.substr(10,1)
      return `${cedulaGrupo1}-${cedulaGrupo2}-${cedulaGrupo3}`
    }
    return null;
  }

}
