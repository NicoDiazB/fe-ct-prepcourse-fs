function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  var siCoincide = array.some(function(num){
    return num == elemento
  })
  
  return siCoincide === true ? 1 : -1
}

module.exports = encontrarElemento;
