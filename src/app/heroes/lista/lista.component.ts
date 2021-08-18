import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public listaAnimales: Array<string>;
  public animalBorrado: string;
  public arrayAnimalBorrados: Array<string>

  constructor() { 
    this.listaAnimales = ['perro', 'gato', 'chancho', 'vaca', 'oveja'];
    this.animalBorrado = '';
    this.arrayAnimalBorrados = [];
  }

  ngOnInit(): void {
  }

  borrarAnimal() {
    this.animalBorrado = this.listaAnimales.shift() || '';
    if (this.animalBorrado !== '') {
      this.arrayAnimalBorrados.push(this.animalBorrado);
    }
    console.log(this.arrayAnimalBorrados);
  }


}
