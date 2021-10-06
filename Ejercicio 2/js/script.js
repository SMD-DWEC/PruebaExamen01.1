//Sergio Matamoros Delgado
//Fecha: 6-10-21

/*
Realiza un script que pida números hasta que se pulse “cancelar”.
Si no se introduce un número deberá indicarse con un «alert» y seguir pidiendo.
Al salir con “cancelar” deberá indicarse la suma total y la media con tres decimales
de los números introducidos.
*/

'use strict';

//Variables.
let input = undefined;
var suma = 0;
let num = 0;
let longitud = 0;

let parar = false;


//Bucle hasta que parar sea verdadero.
while(!parar) {
    input = prompt("Escriba un numero: ");
    if(isNaN(input)) alert("Error, introduzca un numero")
    else {
        if(input != null) {
            num = input;
            suma = parseInt(suma) + parseInt(num);

            //Cada vez que entremos y no sea null, sumamos 1 a la longitud para poder hacer la 
            //media correctamente
            longitud++;
        }
        else 
            parar = true;
    }
}


let arreglo = suma / longitud;
console.log(`La suma total es de : ${suma} y la media es de: ${arreglo.toFixed(3)} `);