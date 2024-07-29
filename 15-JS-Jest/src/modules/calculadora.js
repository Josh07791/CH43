// Aqui vamos a crear el codigo que se  evaluara, es decir, una calcuadora para sumar, restar, multiplicar y dividir 2 numeros enteros.

const calculadora = { // objeto
    suma(a, b){
        return a + b;
    },
    resta(a, b){
        return a - b;
    },
    multiplicacion(a, b){
        return a * b;
    },
    division(a, b){
        if (b === 0) {
            throw new Error("No se puede dividir por 0");
          }
        return a / b;
    }
}

// ESmoduless: export default funcion

// Exportar con CommonJS: module.exports = fuction;
module.exports = calculadora;