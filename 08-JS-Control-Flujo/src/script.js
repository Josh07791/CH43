console.log("--- Control de Flujo -----");

// Declaracion if - else
let edad = 8;

if(edad >= 18){
    console.log("Bienvenido");
} else{
    console.log("Video de Youtube");
} // input: 19, output: Bienvenido

// Declaracion if
if (edad >= 10) {
    console.log("Puedes usar internet");
} //input 8, output: false

//edad = null;
/* Para evaluar que un usuario esta ingresando su edad, podemos utilizar una sentencia condicional que evalua algo diferente a null */
if(edad != null){
    console.log("El usuario si esta ingresando su edad");
} else{
    console.log("Ingresa tu edad");
}

// Ejemplo con modificacion de una variable. 
//--- Crear un programa que determine si nos encontramos en perdidas o en ganancias
let saldoInicial =  500;
let saldoFinal = 500;
let balance;

if (saldoInicial < saldoFinal) {
    balance = "Estamos en ganacias";
} else{
    balance = "Estamos en perdidas";
}

// ECMAScript 6 (ES6) version de javascrip. Interpolacion de cadenas, nos permite unir una cadena de caracteres con variables, utilizando backticks `` y ${variables}
console.log("En este momento " + balance); //sin interpolacion de cadenas
console.log(`En este momento ${balance}`); //con interpolacion de cadenas (backticks `` con tecla altGr + tecla })

if(saldoInicial < saldoFinal){
    balance = `Ganando como siempre`;
} else if(saldoInicial === saldoFinal){
    balance = `Estamos tablas`;
} else{
    balance = `Perdiendo como nunca`;
}

console.log(`${balance}`);

// --- Determinar si un numero espar o impar
let numero = 369;

if(numero % 2 === 0){  // % modulo, si es %2 se evalua para par y si el residuo es 0 entonces es par
    console.log(`El numero ${numero} es par`);
} else{
    console.log(`El numero ${numero} es impar`);
}

// --- Operador  ternario. Es una forma concisa de escribir una sentencia condicional (if-else). Se utilizan caracteres para evaluar la condicion y ejecutar los bloques de codigo necesarios.
// (condicion) ? true : false;
//Determinar si un numero es par o impar pero usando operador ternario
let num = 4586933;

let parImpar = (num % 2 === 0) ? `El numero ${num} es par` : `El numero ${num} es impar`;

console.log(parImpar); 

// --- Determinar si una persona es un bebé (<= 3 años), niño (4 y 11), adolescente (12 a 17), adulto (>= 18), pero si es un adulto, determinar si es un adulto joven (18 a 59) o adulto mayor (> 60)
let edadPersona = 65;

if(edadPersona >= 18){
    //console.log("Es un adulto");
    //anidacion de sentencias condicionales (coding hell)
    if (edadPersona >= 60) {
        console.log("Es un adulto mayor");
    } else{
        console.log("Es un adulto joven");
    }
} else if(edadPersona >= 12){
    console.log("Es un adolecente");
} else if(edadPersona >= 4){
    console.log("Es un niño");
}else{
    console.log("Es un bebé");
}

// ***** Sentencia Switch **** //
console.log("*** Switch ***");

//Determinar si el dia de la semana es laborable (lunes a viernes) o es de descanso (sabado o domingo)
let diaSemana = "miercoles"; 

switch (diaSemana) {
    case "lunes":
        console.log(`El ${diaSemana} es laborable`);
        break;
    case "marte":
        console.log(`El ${diaSemana} es laborable`);
        break;
    case "miercoles":
        console.log(`El ${diaSemana} es laborable`);
        break;
    case "jueves":
        console.log(`El ${diaSemana} es laborable`);
        break;
    case "viernes":
        console.log(`El ${diaSemana} es laborable`);
        break;
    case "sabado":
        console.log(`El ${diaSemana} es descanso`);
        break;
    case "domingo":
        console.log(`El ${diaSemana} es descanso`);
        break;
    default:
        console.log("No es un dia de la semana");
        break;
}

