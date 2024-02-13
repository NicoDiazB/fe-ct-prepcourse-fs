function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  var str1SinEspacios = str1.replace(/ /g, "");
  var str1Final = str1SinEspacios.toLowerCase();
  var str2SinEspacios = str2.replace(/ /g, "");
  var str2Final = str2SinEspacios.toLowerCase();

  var str1Acortado = str1Final.split("").sort().join("")
  var str2Acortado = str2Final.split("").sort().join("")
  // console.log("string1: "+ str1Acortado)
  // console.log("string2: "+ str2Acortado)

  return str1Acortado === str2Acortado
  // mal plateamineto de resoculcion
  // var i2 = str1Final.length - 1;
  // for (let i = str1Final.length- 1; i >= 0; i--) {
  //   i2 -= 1
  //   // resultado += stringFinal[i];
  //   if (str1Final[i] == str2Final[i2]){
  //     return true

  //   }
  //   else { return false}
  // }
  
}

module.exports = esAnagrama;
