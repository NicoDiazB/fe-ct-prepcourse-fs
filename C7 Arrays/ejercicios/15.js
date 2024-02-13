function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var numeroMayor = array[0] // creamos unavariable donde guarda el nuemro el primer elemento del array
  var indiceMayor = 0 // empezamos el indice en 0 tambien

  for (let i = 0; i < array.length; i++) { // hacemos un bucle para array
    if(array[i] > numeroMayor){// de cumplirse el caso guarda el nuevo valor de numero mayor y indice mayor y sigue hasta terminar de ver todo el array
      numeroMayor = array[i]
      indiceMayor = i
    }
  }
  return indiceMayor

  // var indiceDelMayorNum = array.filter(function(num, indice){
  //   if(num > 2){
  //     console.log(indice)
  //     return indice
  //   }
  // })
  // console.log(indiceDelMayorNum)
  // return indiceDelMayorNum
}

module.exports = encontrarIndiceMayor;
