function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  
  var numeroMayoresA10 = array.filter(function(num){
    return num > 10
  })
  return numeroMayoresA10.length
  // array.filter(el => el > 10).length // una forma de hacerlo para no hacer sobre ingenieria
}

module.exports = contarElementosMayoresA10;
