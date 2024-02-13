function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a < 0) return 0
  var resultado = 1;
  for (var i = a; i <= b; i++){
    resultado = resultado * i
    // console.log(resultado)
    // resultado *= i
  }
  return resultado

}

module.exports = productoEntreNúmeros;