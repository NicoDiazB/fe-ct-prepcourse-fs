const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var resultado = 0
  for (const key in objeto) {
    if (Object.hasOwnProperty.call(objeto, key)) {
      resultado++; 
      
    }
  }
  return resultado;
};

module.exports = contarPropiedades;
