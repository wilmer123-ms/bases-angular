import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  @Input() nuevoPersonaje: Personaje = { nombre: '', poder: 0 };
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> =
  //   new EventEmitter<Personaje>();

  constructor(private dbzService: DbzService) {}

  ngOnInit(): void {}

  agregar(): void {
    // Elimina los espacios en blanco iniciales y finales

    if (this.nuevoPersonaje.nombre.trim().length <= 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevoPersonaje);
    this.nuevoPersonaje = {
      nombre: '',
      poder: 0,
    };
    // this.onNuevoPersonaje.emit(this.nuevoPersonaje);
  }
}
