function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  var flag = null
  var comparador = numeros[0]
  for (let i = 0; i < numeros.length - 1; i++) {
    comparador = numeros[i]
    
    if(comparador + 1 !== numeros[i+1]){
      flag = comparador + 1
      break;
    }
  }
  
  return flag;
  
}
encontrarNumeroFaltante([1, 2, 3, 4, 6, 7, 8, 9])
module.exports = encontrarNumeroFaltante;