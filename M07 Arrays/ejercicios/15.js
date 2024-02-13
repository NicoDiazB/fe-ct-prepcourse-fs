function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  // var resultado = array.every(el => el === array[0])
  // return resultado
  return array.every(el => el === array[0]) 

  // }
}
todosIguales([1,1,1,1,1,1])
module.exports = todosIguales;
