function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  // se crea la cadena vacia donde emperzara la palabra 
  var resultado = ""
  // lo que va a iterar i con las catidades de veces del length de una palabra le restamos 1 al length ya que vamos a usar la busqueda de letras unasdo [] que empieza en 0, mientras i sea mayor o = a 0 seguira corriendo y hacemos un decremento hasta llegar a -1
  for (let i = texto.length - 1 ; i >= 0 ; i--) {
    resultado += texto[i] ; // esto el lo mismo que decir resultado = resultado + texto[i]
  }
  return resultado
}

module.exports = invertirTexto;