function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  // if (typeof valor === "string" || typeof valor === "number" || valor === false)
  //   return false
  // if(!valor === true || valor === null ){
  //   return true
  // }
  // else{
  //   return false
  // }
  if (valor === null || valor === undefined) return true;
  else return false
}

module.exports = esNuloOIndefinido;