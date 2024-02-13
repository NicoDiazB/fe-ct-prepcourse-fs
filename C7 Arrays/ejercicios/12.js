function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var arrayMayuscula = array.map(function (num){

    return num.toUpperCase()

    //seleciono la letra que quiero modificas        
    // console.log(num.charAt(0)             
    // con toUpperCase() convierto esa letra seleccionada en mayuscula
    // .toUpperCase()
    // con num.slice quito la pimera letra y le agrego con el "+" la letra ya converitda en mayuscula
    //+ num.slice(1))
    // return num.charAt(0).toUpperCase()+ num.slice(1)
  })
  return arrayMayuscula

}

module.exports = convertirStringAMayusculas;
