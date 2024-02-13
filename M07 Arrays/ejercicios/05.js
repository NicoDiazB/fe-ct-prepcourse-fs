function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  // agrego una bandera que me solucuine el problema si una condicion no se cumple
  var flag = undefined;

  for (let i = 0; i < array.length; i++){
    //hago la pregunta si el lenght de alguna de las variables es >= 5 deten el bucle
    if(array[i].length >= 5 ){
      // si se cumple la condicion la flag ahora tendra un valor nuevo 
      // de no ser asi la flag queda como indefinida por lo cual se entedera que no cumplio con el parametro
      flag = array[i];
      break;
    }
  }
  return flag;
}

module.exports = obtenerPrimerStringLargo;
