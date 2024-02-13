function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  var longitud = array.length
  
  var i = Math.floor(Math.random()* longitud)
  return array[i];
}


module.exports = obtenerElementoAleatorio;
