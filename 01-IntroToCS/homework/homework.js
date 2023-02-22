'use strict';

function BinarioADecimal(num) {
      //Sumatorio del binario "num" pero invertido
      // digito del binario * 2 ** indice alrevez (num invertido)
   var binario = num.split("").reverse().join("");

   var suma = 0;

   for (let i=0 ; i < binario.length; i++){
      suma += binario[i] * 2 ** i;  //Tener en cuenta que JS decie tomar a binario[i] como numero SIENDO ESTE UN STRING
   }

   return suma;
}

function DecimalABinario(num) {
   //dividir el numero hasta que nos quede 0
   //ir tomando en cada paso el modulo (1 o 0), al modulo los voy uniendo
   //finalmente retornar el binario

   var binario = "";

  while (num > 0 ){
   var digito = num % 2; //primero hago el modulo para obtener los numeros binarios, y armo el array
   num = Math.floor(num / 2); // luego modifico a num, y lo redondeo para abajo, asi puedo cerrar el ciclo WHILE

      binario = digito + binario; //OBTENGO 321<-0 cambia el sentido en como se agrupan , sino deberia hacer como el EJ 1
   // binario = binario + digito; //OBTENGO 0->123
  }

  return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
