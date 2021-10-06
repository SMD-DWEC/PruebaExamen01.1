//Sergio Matamoros Delgado
//Fecha: 6-10-21
/*
Construir una clase base genérica llamada edificio que almacene el número de plantas
que tiene el edificio, el número de habitaciones y su superficie total.
Crear una clase derivada llamada casa que herede edificio y que almacene también lo siguiente:
el número de dormitorios y de baños. Crear también otra clase derivada llamada oficina que herede
edificio y que almacene además el nombre de la empresa, el número de extintores y de teléfonos.

Luego, haz un programa que instancie al menos dos objetos de cada clase.
*/

'use strict';

class Edificio {
    constructor() {
        this.plantas = 2;
        this.habitaciones = 1;
        this.superficie = 50;
    }
}

class Casa extends Edificio {
    constructor() {
        super();
        this.dormitorios = 1;
        this.banios = 1;
    }
}

class Oficina extends Edificio {
    constructor() {
        super();
        this.nombre = "HP"
        this.extintores = 1;
        this.telefonos = 4;
    }
}


//Clase inicial.

class App{
    constructor() {

        this.edificio = new Edificio();
        this.casa = new Casa();
        this.oficina = new Oficina();

        this.inicio();
    }
    inicio() {

        console.log(`Superficie total: ${this.edificio.superficie} plantas: ${this.edificio.plantas}`);
        console.log(`La casa tiene: ${this.casa.superficie}m2 y tiene: ${this.casa.banios} baños`);
        console.log(`La oficina de ${this.oficina.nombre} tiene: ${this.oficina.superficie}m2 y tiene: ${this.oficina.telefonos} teléfonos`);

    }
}

new App();