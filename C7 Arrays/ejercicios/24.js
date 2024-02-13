function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  var resultado = [num +2]
  for (let i = 0; i < 8 ; i++) { 
    // if(5 === i){
    //   continue
    // }else
     resultado.push(resultado[i] + 2) 
  }
  return resultado
}


module.exports = continueStatement;
