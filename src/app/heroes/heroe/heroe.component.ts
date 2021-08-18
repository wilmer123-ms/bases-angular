import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    public nombreHeroe: string = 'Iroman';
    public edad: number = 45;   

    get nombreCapitalizado(): string {
        return this.nombreHeroe.toUpperCase();
    }

    descripcion(): string {
        return `${this.nombreHeroe} - ${this.edad}`;
    }

    cambiarHeroe() {
        this.nombreHeroe = 'Spiderman'
    }

    cambiarEdad() {
        this.edad = 100
    }

    
}