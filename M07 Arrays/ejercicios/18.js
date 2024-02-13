function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
   
  var resultado = [num +2]
  for (let i = 0; i < 9 ; i++) { 
    if(resultado[i] === i){
      resultado = "Se interrumpió la ejecución"
      break;
    }else resultado.push(resultado[i] + 2) 
  }
  return resultado
}

module.exports = breakStatement;
