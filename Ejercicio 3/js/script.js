//Sergio Matamoros Delgado
//Fecha: 6-10-21
/*
Realiza un programa que genere una lista de 10 números enteros aleatorios entre -150 y 150. El programa deberá:
    Mostrar la lista por pantalla.
    Indicar el número de valores negativos.
    La cantidad de valores positivos ingresados mayores de 15.
    La cantidad de múltiplos de 15.
    El valor acumulado de los números ingresados que son pares.

*/

'use strict';

//Constantes de numeros aleatorios a generar
const numRandom1 = 151;
const numRandom2 = 150;

//Variables
let rnd = 0;
let numNegatives = 0;
let numPluses = 0;
let multiplos = 0;
let pares = 1;

for(let i=1;i<=10;i++) {
    //Genera un número aleatorio entre 100 y -100
    rnd = Math.floor(Math.random()*300)-150;
    console.log(`Número ${i}: ${rnd}`);
    if(rnd <0) numNegatives++;
    else if(rnd > 15) numPluses++;

    if(esMultiplo(rnd)) multiplos++;
    if(rnd > 0 && esPar(rnd)) {
        console.log("El numero "+rnd);
        pares = parseInt(pares) + parseInt(rnd);
    }
}

console.log(`
Hay un total de ${numNegatives} numeros negativos y ${numPluses} positivos mayores de 15\nHay ${multiplos} multiplos de 15
\nAdemás el valor de los numeros pares es: ${pares}`
);


//Función que permite saber si un numero es multiplo de 15 o no.
// Params: num -> Numero a saber si es multiplo
function esMultiplo(num) {
    if(num % 15 == 0) return true;
    return false;
}

//Función que permite saber si un numero es par o no.
// Params: num -> numero a saber si es par.
function esPar(num) {
    if(num % 2 == 0) return true;
    return false;

}