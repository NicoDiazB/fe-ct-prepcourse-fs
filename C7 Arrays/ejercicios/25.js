function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var resultado = []
  for (let i = 0; i < numeros.length ; i++) { 
    if(numeros[i] % 2 !== 0){
      continue;
    }else
    resultado.push(numeros[i]) 
  }
  return resultado.length
}

module.exports = contarParesConContinue;
