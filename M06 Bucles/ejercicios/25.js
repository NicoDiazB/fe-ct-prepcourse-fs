function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  // Crear una variable donde me guarde el string sin mayusculas y sin espcaio 
  var stringSinEspacios = string.replace(/ /g, "");
  var stringFinal = stringSinEspacios.toLowerCase();
  var resultado = "";
  for (let i = stringFinal.length- 1; i >= 0; i--) {
    resultado += stringFinal[i]; 
  }
  
  return resultado === stringFinal
}

module.exports = esPalindromo;
