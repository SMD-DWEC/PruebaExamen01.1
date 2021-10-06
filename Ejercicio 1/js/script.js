//Sergio Matamoros Delgado
//Fecha: 6-10-21
/*
Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 y 7 (hay que comprobar todos)
*/
'use strict';

let input = prompt("Escriba un número");




//Si el numero es primo devuelve verdadero, si no false.
function esPrimo(num) {

    if(num==0 || num==1) return false;
    if(num==4) return false;
    for(let i=2;i<num/2;i++) 
        if(num % i == 0) return false;

    return true;
}

if(esPrimo(input))
    console.log(`El número ${input} es primo`);
else 
    console.log(`El número ${input} NO es primo`);
