/*Operadores aritmeticos
suma +
resta -
multiplicacion *
Division /
 -- decremento 1 en 1
 ++ incremento 1 en 1

Operacion de comparacion
= asigna en un operador de asignacion
== Operacion de igualdad  con este operador  vemos a verificar si un valor es igual a otro

let edad = 32;
let primaveras = 32;
console.log(edad== primaveras);

=== Operador de estricta igualdad se refiere a que no solo sea el mismo valor sino que tambien el mismo tipo de dato

let edad = 32;
let primaveras = 32;
console.log(edad=== primaveras);

!= Operador de inigualdad o no igual se encarga de comparar que no sean iguales o que sean distintos
let edad = 32;
let primaveras = 43;
console.log(edad != primaveras);

!== Operador no identico con el cual podemos verificar que no sea el mismo valor o el tipo de dato
let edad = 32;
let primaveras = 43;
console.log(edad !== primaveras);

< menor que
> mayor que

<= menor o igual que
>= mayor o igual que

Operadores logicos
&& and
|| or 
! not





*/

let num1 = 12;
let num2 = 24;
let num3 = 25;
let num4 = 65;
let num5 = 54;
let num6 = 21;
let num7 = 14;
let num8 = 8;


ejemplo1 = num1 < num4;
ejemplo2 = num3 == num5;

console.log(ejemplo1 && ejemplo2);

operacion2 = (num8 == num1 && num6 >= num2) || (num3 < num7 || num4 != num5);
console.log(operacion2);

/*Ejercicio para poder validar el descuento en nuestro carrito de compras

Si el total de mi carrito es mayor o igual a $1000, obtendras un descuento de 10%
Si el total de mi carrito es mayor o igual a $500, obtendras un descuento de 05%
Si el total de mi carrito es mayor o igual a $200, obtendras un descuento de 02%
*/
// let totalCarrito = 850;
// let descuento = 0;
// let precioFinal = 0;

// if (totalCarrito >= 1000) {
//     descuento = 0.10;
// } else if(totalCarrito >= 500 && totalCarrito < 1000) {
//     descuento = 0.05;
// } else if(totalCarrito >= 200 && totalCarrito < 500){
//     descuento = 0.02;
// } else{
//     descuento = 0;
// }
// precioFinal = totalCarrito -  (descuento * totalCarrito);
//alert(precioFinal);


/*Vamos a calcular si un pedido aplica para envió gratis
el envió gratuito es a partir de 1599
999 de compra descuento del 8%
y descuento del 6 % en compras mayores o iguales a 599
189 del envió
*/

let pedido = parseInt(prompt("Ingresa el total de tu compra"));
let descuento = 0;
let envio = 0;
let totalPagar = 0;

if(pedido >= 1599){
    envio = 0;
    alert("Aplica para envio gratis");
} else if(pedido >= 999){
    descuento = 0.08;
    envio = 189;
} else if(pedido >= 599){
    descuento = 0.06;
    envio = 189;
} else{
    descuento = 0;
    envio = 189;
}
totalPagar = pedido + envio - (pedido * descuento);
alert("El total a pagar es: "+ "$" + totalPagar);