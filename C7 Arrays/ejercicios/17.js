function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  
  var numeroSuma= 0 
 
  for (let i = arrayOfNums.length -1; i >= 0; i--) { 
    numeroSuma += arrayOfNums[i] 
  }
  
  return numeroSuma
}

agregarNumeros([10, 10, 16])
module.exports = agregarNumeros;
