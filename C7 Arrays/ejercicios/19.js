const { run } = require("jest")

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  if(arguments.length === 0) return 0
  
  var multipicacion = 1
  for (let i = 0; i < arguments.length; i++) {
        multipicacion *= arguments[i]
       
  }
    return multipicacion
  }

module.exports = multiplicarArgumentos;