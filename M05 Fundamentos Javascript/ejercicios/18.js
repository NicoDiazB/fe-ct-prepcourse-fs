function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  if(typeof num !== "number"){
    return false
  }
  if(num % 2 != 0) {
    return true
  }
  else{
    return false
  }
}

module.exports = esImpar;