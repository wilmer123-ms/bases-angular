import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorModule } from '../contador/contador.module';
import { HeroeComponent } from './heroe/heroe.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [HeroeComponent, ListaComponent],
  exports: [HeroeComponent, ListaComponent],
  imports: [CommonModule, ContadorModule]
})
export class HeroesModule {}
