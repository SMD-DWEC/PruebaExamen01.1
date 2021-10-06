//Sergio Matamoros Delgado
//Fecha: 6-10-21
/*
Realiza una función que reciba como parámetro un entero (longitud)
y una lista de caracteres prohibidos y devuelva un array de caracteres aleatorios
no repetidos, con la longitud indicada y sin ninguno de los caracteres prohibidos.
*/
'use strict';

let caracteres = [
    'a', 'b', 'c','d','e','f','g','h','i'
];

function listas(longitud, cadena) {

    const letras = 'abcdefghijklmnñopqrstuvwxyz';

    let arrayRnd = [];

    let rnd = undefined;

    for(let i=0;i<longitud;i++) {
        rnd = letras.charAt(Math.floor(Math.random()*letras.length));

        if(!allowed(rnd,cadena)) {
            console.log("Caracter prohibido, se encontró una: "+rnd);
            longitud++;
        }
        else if(!esRepetida(arrayRnd,rnd))
            arrayRnd.push(rnd)
        else 
            longitud++;
    }
    return arrayRnd;
}


//Comprueba si la palabra es o no permitida
function allowed(palabra, prohibidas) {

    for(let i=0;i<prohibidas.length;i++) {
        if(palabra == prohibidas[i]) {
            return false;
        }
    }
    return true;
}


function esRepetida(lista,palabra) {
    for(let i=0;i<lista.length;i++) {
        if(palabra == lista[i])
            return true;
    }
    return false;
}

console.log(listas(4,caracteres));

