function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  //creamos la variable que nos va a guardar el numero ingresado
  var resultado = numero;
  // se crea el bucle while para dar iteraciones hasta que la condicion se cumpla en este cas0 si el resultado es <2 va a detener el bucle ya que llegamos a la minima expresion que dividir por 2
  while (resultado >= 2 ){  
    // preguntamos si al dividir por 2 nuestro numero ingresado deja restos si es asi determinamos que es false y se detiene.
    if(resultado % 2 !== 0){
      return false;
    }
    // por ultimo hacemos que nuestro numero ingresado se siga diviendo por 2 
    resultado = resultado/2
  }
  // una vez se detenga el bucle confirmara si el resultado es 1 lo cual botara true lo que significa que era potencia de 2 
  return resultado === 1;
}

module.exports = esPotenciaDeDos;
