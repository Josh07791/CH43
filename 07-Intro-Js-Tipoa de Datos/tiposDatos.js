/*Variable
var -> podemos declarar una variable con var sin inicializarla, sin embargo ya no es tan utilizada por que tiene n alcance global(se aplica a todo el codigo).

Let -> podemos declararla sin inicializarla, sin embargo tiene un alcance local y e suna buena practica utilizarla y es de las mas utilizadas

Const -> la variable se debe de inicializar en el momento de la declaracion y su valor debe permanecer constante. Se refiera a una constante algo que nunca cambiara como PI, 

scope se refiere a la accesibilidad de las variables y funciones dentro de distintas partes de mi codigo. El scope determina el tema de la accesibilidad, es decir, donde y como vamos a manipular las variables de mi programa (Cuentas de netflix)

Declarar una variable se refiere a dercirle a mi programa que la variable existe o esta ahi utiliando var, let y const y de esta manera reservar este espacio de memeoria.

Inicialización se refiere a agregarle un valor inicial como su nombre lo dice 

let nombre = "Fer";

Tipos de datos primitivos:
Se les llama de esta manera por que son los tipos de datos mas basicos dentro de javascript, es decir los que ya venian con el lenguaje.

String es una cadena de texto, secuencia de caracteres
let = "Ramos";

number se refiere a valores númericos
let edad = 25;

Boolean serefiere a un valor booleano y que solo nos da verdadero o falso
let ine = true;

null se refiere a la ausencia o falta de algun valor.
let comensal = null;

undefinied se refiere a una variable que se declaro pero no se inicializo.
let comensal;


let nombre = "Fer";
nombre = "Luisa";
console.log(nombre);
Encasillamiento
*/

let edad = 32;
let bendis = 2;
let primaveras = "32";

//coercion implicita
let operacion = edad + primaveras;
console.log(operacion);

// coercion explicita
let operacion2 = edad + Number(primaveras);
console.log(operacion2);

//Multipes variables
// let nombre1, nombre2, nombre3;
// nombre1 = "Dani";
// nombre2 = "Felipe";
// nombre3 = "Josue";

let nombre1 = "Dani", nombre2 = "Felipe", nombre3 = "Josue";

console.log(nombre1);
console.log(nombre2);
console.log(nombre3);

//typeof es un metodo que nos permite saber que tipo de dato es el que tenemos
console.log(typeof(nombre1));

let comensal;
console.log(typeof(comensal));

//Conversion de datos  de numeros a cadenas de texto (String)
console.log(String(edad));
console.log(typeof(String(edad)));
console.log(typeof(bendis.toString()));

//Conversion de cadenas de texto a numero
let cambioNumber = console.log(typeof(Number(primaveras)));
console.log(typeof(parseInt(primaveras)));
console.log(typeof(parseFloat(primaveras)));

//Conversion de boolean a number
let ine = true;
let cambioBoolean = console.log(Number(ine));
console.log(typeof(parseInt(ine)));
console.log(typeof(parseFloat(ine)));

console.log(typeof ine.toString());

//Concatenar se refiere a unir String
//let nombre4 = prompt("Holi");
//alert("Hola " + nombre4);

//Ejemplo
//let producto = Number(prompt("Ingresa el costo del producto"));
//let cantidad = Number(prompt("Ingrese el numero de productos solicitados"));

//let resultado = producto + cantidad;
//alert(resultado);

let compra = Number(prompt("Ingresa el total de tu compra"));
let descuento;
let totalPagar;

if(compra >= 200 && compra <400){
    descuento = compra * 0.10
}
else if (compra >= 400 && compra <600){
    descuento = compra * 0.20
}
else if (compra >= 600 && compra <800){
    descuento = compra * 0.30
}
else if(compra == 800){
    descuento = compra * 0.40
}
else{
    alert("el cosete esta fuera de los parametros");
    descuento = 0;
}
alert("El descuento a aplicar es: " + descuento);
totalPagar = compra - descuento;
alert("el total a pagar es de " + totalPagar);










