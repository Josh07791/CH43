// --- Ciclo for. Permite iterar sobre un bloque de codigo, evaluando condiciones e incrementando/decrementando un  contador
for(let cuenta = 1; cuenta <= 5; cuenta ++){
    console.log(cuenta);
}

// Ciclo for con variable global
let numeroDecremento = 5;
for(numeroDecremento; numeroDecremento >= 1; numeroDecremento --){
    console.log(numeroDecremento);
}

// sumar todos los numeros del 1 al 100 = 5050
let suma = null;
for(let i = 1; i <= 100; i++){
    suma += i;
}
console.log(suma);

// Ciclo for para recorrer un Array
const ch43 = ['miriam', 'alan', 'miguel', 'mitzi', 'juan', 'liz', 'diego', 'mariscal', 'emily', 'arturo', 'sadrak', 'josue', 'saul', 'fernando', 'oscar', 'salvador', 'erick', 'monica', 'cristian', 'felipe', 'pablo', 'cintia', 'brandon'];

for(let i = 0; i < ch43.length; i++){
    console.log(ch43[i]);
}

// Ciclos para Array: `for in` (devuelve índices) y `for of` (devuelve los elementos del Array)
for (let developer of ch43) { // developer es como el i=0 y se va iterando hasta que llega al ultimo indice
    console.log(`Hola soy el desarrollador/a ${developer}`);
}
for (let developer in ch43) {
    console.log(developer);
}

// Encontrar los numeros pares del 247 al 361
for(let numero = 247; numero <= 361; numero++){
    if(numero % 2 === 0){
        console.log(`${numero} es numero par`);
    }
}

// --- Ciclo While. Permite recorrer bloque de codigo mientras se cumpla ua condicion
// Realizar una cuenta del 1 a 5
let i = 1;

while(i <= 5){
    console.log(i);
    i++;
}

/* Otra manera de realizar las instrucciones
let i = 0;

while(i < 5){
    i++;
    console.log(i);
}
*/

// Tomando nuestro Array de ch43, mostrar los elementos utilizando un ciclo while
let developer = 0;
while (developer < ch43.length) {
    console.log(ch43[developer]);
    developer++;
}
// imprimir una secuencia de asteriscos, desde 1 a 5 asteriscos
let limite = 5;
let inicio = 0;
let asterisco = '';

while(inicio < limite){
    asterisco += "*";
    console.log(asterisco);
    inicio++;
}

// --- Ciclo Do-While. Recorre un bloque de codigo mientras se cumpla una condicion especifica, pero antes de evaluar dicha condicion ejecuta al menos una vez la instruccion.
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

let k =1;
do {
    console.log(k);
    k++;
}while(k < 1);

// -- Contro de ciclos. Existen dos sentencias que nos permiten controlar los ciclos: break y continue. Break detiene un ciclo en un punto específico y continue permite que el ciclo continúe pero ejecutando una acción específica en un punto dado. y continue permite
let cuenta = 0;
while(cuenta < 100){
    cuenta++;
    console.log(cuenta);
    // Sentencia break
    if(cuenta === 22){
        break;
    }
}

for(let contador = 1; contador <= 10; contador++){
    // Sentencia continue
    if (contador === 5) {
        console.log('Cliente ganador');
        continue;
    }
    console.log(`Cliente numero ${contador}`);
}