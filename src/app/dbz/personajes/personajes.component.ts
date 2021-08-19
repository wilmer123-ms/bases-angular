import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {
  constructor(private bzService: DbzService) {}

  ngOnInit(): void {}

  get personajes(): Personaje[] {
    return this.bzService.getPersonajes;
  }
}
