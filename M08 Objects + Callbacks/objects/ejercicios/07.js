// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    nombre: "edgar",
    familia: {
        madre: "carmen",
        padre: "pedro",
    },
    nombreDeLaMadre: function(){
        var resultado = this.familia.mama;
        return resultado 
    },
};

module.exports = objetoAnidado;
