import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public nuevoPersonaje: Personaje;

  constructor(private bzService: DbzService) {
    this.nuevoPersonaje = { nombre: '', poder: 0 };
  }

  ngOnInit(): void {}

  // onNuevoPersonaje(argument: Personaje) {
  //   console.log(argument);
  //   this.personales.push(argument);
  //   this.nuevoPersonaje = {
  //     nombre: '',
  //     poder: 0,
  //   };
  // }
}
