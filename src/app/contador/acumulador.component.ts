import { Component } from '@angular/core'

@Component({
    selector: 'app-acumulador',
    template: `
        <h3>{{ titulo }}</h3>

        <button (click)="acumulador(base)">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumulador(-base)">-{{base}}</button>
    `
})
export class AcumuladorComponent {
    public titulo = 'contador app';
    public numero: number = 10;
    public base: number = 5;
  
    acumulador(valor: number) {
      this.numero += valor
    }
}