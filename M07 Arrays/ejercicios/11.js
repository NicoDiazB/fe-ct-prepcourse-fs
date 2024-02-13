function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
    var numeroMultiplicado= [] 
    for (let i = 0; i < array.length; i++) { 

      numeroMultiplicado.push(array[i] * i)// uso el metodo push para ir agregando el nuevo resultado al array
    }
   
    return numeroMultiplicado
}
multiplicarElementosPorIndice([100, 100, 100, 100, 100])
module.exports = multiplicarElementosPorIndice;
