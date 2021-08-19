import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  private personajes: Personaje[];

  constructor() { 
    this.personajes = [
      { nombre: 'goku', poder: 250000 },
      { nombre: 'picolo', poder: 10000 },
    ];
    console.log('servicio listo para usar')
  }

  get getPersonajes(): Personaje[] {
    return [...this.personajes]
  }

  agregarPersonaje(newPersonaje: Personaje) {
    this.personajes.push(newPersonaje)
  }
}
