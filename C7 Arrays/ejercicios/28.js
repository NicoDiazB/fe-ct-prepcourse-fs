function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  return arr.length> 0 && typeof arr === "object"
  
  
}
esArrayNoVacio([1,2,3])
module.exports = esArrayNoVacio;