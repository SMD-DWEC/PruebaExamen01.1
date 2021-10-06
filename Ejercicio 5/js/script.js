//Sergio Matamoros Delgado
//Fecha: 6-10-21
/*
Realiza un programa en JavaScript que muestre la hora actualizada cada segundo.
Utiliza para ello la función setTimeout
*/
'use strict';

//Función hora.
function hora() {
    let date = new Date();

    setTimeout(() => {
        console.log(date.getHours() + ":" + date.getMinutes());
    }, 1000);
}


//Usamos setInterval en vez de otro bucle, ya que el rendimiento debería ser mejor.
//Llama a la función hora cada 5 segundos.
setInterval(() => {
    hora();
}, 5000);