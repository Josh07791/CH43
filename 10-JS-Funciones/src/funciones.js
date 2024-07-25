/* Definición de funciones:  es un bloque de codigo que realiza una accion 
Una funcion es un bloque de codigo que se ejecuta cada que yo lo mande a llamar, va a contener distintas instrucciones con base en lo quue yo necesite

*/

/* 
function name(params, si lleva parametro puede estar vacio) {
    
}
 */
function recomendancion() {
    let clima = prompt("Que tal el clima el dia de hoy?");
    if (clima == "Soleado") {
        alert("Usa bloqueador solar");
    } else {
        alert("Ponte sueter");
    }
}
//recomendancion(); //puede ser llamada antes o despues de la creacion de la funcion
//recomendancion();

/*function saludar(){
    console.log("Hola desde una funcion");
}
saludar(); //puede ser llamada antes o despues de la creacion de la funcion
saludar();
saludar();
saludar();

function carritoMensaje (nombre, cantidadProductos){
    let carritoMensaje = `Hola ${nombre} tienes ${cantidadProductos} productos en tu carrito, procdemos al pago?`;
    alert(carritoMensaje);
}

let nombre = prompt("Ingresa tu nombre");
let cantidad = prompt("Ingresa la cantidad de productos");
carritoMensaje(nombre, cantidad);
carritoMensaje(nombre, cantidad);
carritoMensaje(nombre, cantidad);*/


// Funcion anonimas
/*let carritoCompra = function(){
    let nombre = prompt("Ingresa tu nombre");
    let productos = prompt("Ingresa la cantidad de productos");

    let mensaje = `Hola ${nombre} tienes ${productos} productos en tu carrito, procedemos al pago?`
    alert(mensaje);
}

carritoCompra();*/

/* Return 
   La palabra reservada return nos indica que estamos devolviendo un tipo de dato al ejecutar nuestra funcion
*/

function sumar(a, b){
    console.log("El resultado de la suma es: ");
    return a + b;
}

let suma = sumar(15, 98);
console.log(suma);

let suma1 = sumar(74, 52);
console.log(suma1);

function bienvenidx(nombre){
    return "Hola, " + nombre + " Ya eres cliente prenium";
}

let aviso = bienvenidx("Saul");
console.log(aviso);

let num1 = 15;
let num2 = 25;
let suma2 = num1 + num2;
console.log("El resultado es: " + suma2);

function sumar(num1, num2) {
    let suma3 = num1 + num2;
    return suma3;
}
let resultado = sumar(54, 89);
console.log(resultado);

// Funciones flecha, su sintaxis es mas concisa al no tener que utiliar la palabra reservada function, return y si tengo solo un parametro los parentesis ya no son necesarios igual que las llaves
const saludo = nombre => console.log("Hola " + nombre); //const nombrefuncion = parametro => return;

saludo("Felipe");

const multiplicar = (c, d) => c * d;
console.log(multiplicar(12, 36));

/* Hoisting 
Es un comportamiento dentro de js que hace que en la declaracion de variables y funciones se eleven al inicio del contexto en el que estan definidas
*/