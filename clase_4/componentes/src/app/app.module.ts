import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TarjetaSwitchComponent } from './tarjeta-switch/tarjeta-switch.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { ItemPersonaComponent } from './item-persona/item-persona.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    TarjetaSwitchComponent,
    ListadoPersonasComponent,
    ItemPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
