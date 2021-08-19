import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbzRoutingModule } from './dbz-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './servicios/dbz.service';


@NgModule({
  declarations: [MainPageComponent, PersonajesComponent, AgregarComponent],
  exports:[MainPageComponent],
  imports: [
    CommonModule,
    DbzRoutingModule,
    FormsModule,
  ]
})
export class DbzModule { }
