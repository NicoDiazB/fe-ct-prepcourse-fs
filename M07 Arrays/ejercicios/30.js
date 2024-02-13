function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var flag = undefined

  for (let i = 0; i < numeros.length; i++) {
    for (let j = numeros.length - 1; j > i ; j--) {
      if (numeros[i]  === numeros[j]){
        flag = numeros[i]
        break
      }
      
    }
    if (flag != undefined)
    break
  }
  return flag
}

module.exports = encontrarElementoRepetido;