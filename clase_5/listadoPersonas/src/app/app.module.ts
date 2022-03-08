import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MiPipePipe } from './mi-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoComponent,
    TarjetaComponent,
    MiPipePipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
