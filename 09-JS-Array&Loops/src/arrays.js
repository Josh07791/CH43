/*** Creando Arrays ***/

// --- Opcion 1. para inicializar un array puedo escribir de manera directa los elementos dentro de los corchetes
let shopping = ['pan', 'leche', 'queso', 'espinacas', 'huevos', 'carne']; // 6 elementos

// --- Opcion2. A partir de un array vacio iremos agregando elementos por cada indice
let cars = []; //array vacio
// agrego elementos llamando al array y el indice de cada elemento
cars[0] = 'Volkswager';
cars[1] = 'Mazda';
cars[2] = 'Suzuki';
cars[3] = 'Nissan';

// --- Opcion 3. Mandar a llamar el array como objeto. Al ser un objeto posee su propia clase (Array son objetos y estos inicia con mayuscula)
let cantantes = new Array('Luis Miguel', 'Wendy sulca', 'Jose Jose', 'Justin Bieber', 'Los Llayras', 'Los panchos', 'Molotov');

//Imprimiendo en consola los 3 Arrays
console.log(shopping);
console.log(cars);
console.log(cantantes);

// Acceder a un elemento del Array mediante su indece
let accesoElemento = `Sebastia se come un ${shopping[0]} mientras conduce su ${cars[3]}`; //Output: Sebastia se come un pan mientras conduce su Nissan
console.log(accesoElemento);

/**** Método de Arrays ****/

// --- Longitud de un Array (.length)
let longitudCantantes = cantantes.length; //nos dice el numero de elementos
console.log(longitudCantantes); //Output: 7

// --- Acceder al ultimo elemento de cualquier Array (Array.length-1)
let ultimoElementoPosicion = cantantes.length-1; //nos dal la ultima posicion
let ultimoElemento = cantantes[cantantes.length-1]; //nos muestra el elemento que esta el ultimo elemento
console.log(ultimoElemento); // Output: Molotov

// Creando un nuevo Array para probar mis metodos.
const ch43 = ['miriam', 'alan', 'miguel', 'mitzi', 'juan', 'liz', 'diego', 'mariscal', 'emily', 'arturo', 'sadrak', 'josue', 'saul', 'fernando', 'oscar', 'salvador', 'erick', 'monica', 'cristian', 'felipe', 'pablo', 'cintia', 'brandon'];
console.log(ch43);

// --- pop(); elimina el ultimo elemento del Array
ch43.pop();
console.log(ch43);

// --- push(); agregamos un nuevo elemento al final del Array
ch43.push('brandon');
console.log(ch43);

// --- unshift(); agrega un elemnto al inicio del Array
ch43.unshift('alan');
console.log(ch43);

// --- shift(); elimina el primer elemento del Array
ch43.shift();
console.log(ch43);

// --- slice(); nos recupera todos los elementos a partir del indice proporcionado
let arraySlice = ch43.slice(16);
console.log(arraySlice);

// --- at(); recupera el elemento con el indice dado
console.log(ch43.at(2));

// --- Agregando un nuevo elemento al inicio de mi array, para poder mostrar otro metodo.
ch43.unshift('Zhaid');
console.log(ch43);

// --- sort(); ordena un Array de manera Ascendente tomando como referencia la tabla ASCII
ch43.sort();
console.log(ch43);

// --- reverse(); invierte el orden del Array
ch43.reverse();
console.log(ch43);

// --- indexOf(); me devuelve el indice del primer valor (elemento) encontrado en un Array siempre regresa el primer valor encontrado
let indiceEleemnto = ch43.indexOf('cristian');
console.log(indiceEleemnto);

let indiceEleemnto2 = ch43.indexOf('zhaid');
console.log(indiceEleemnto2); // -1 no existe el elemento dentro del Array

// --- forEach(); me devuelve todos los elementos de Array. Itera sobre cada elemento y lo imprime uno por uno
ch43.forEach((developers) => console.log(developers));

// --- map(); Crea un nuevo Array con los resultados de la llamada a la funcion indicada, aplicado a cada uno de los elementos 
const developers = ch43.map((developer) => `Hola ${developer}`);
console.log(developers);

/**** Arrays multidimensionales ****/
const comidas = ['Tamalito de chipilin', 'Cochinita', 'Lechón', 'Tacos envenenados', 'Guajolota', 'Torta ahogada', 'Carne asada', 'Machetes', 'Enchiladas queretanas', 'Tacos de canasta'];

const estados = ['Cdmx', 'Zacatecas', 'Tabasco', 'Jalisco', 'Chihuahua', 'EdoMex', 'Yucatán', 'Queretaro', 'Tlaxcala', 'Quintana Roo'];

const menu = [comidas, estados];
console.log(menu);

let shopping2 = [
    ['pan', 'leche', 'queso', 'espinacas', 'huevos', 'carne'],
    ['verduras', 'frutas', 'lacteos'],
    ['congelados', 'mariscos', 'carnes', 'postres']
];
console.log(shopping2);

// Mando a llamr un elemento del Array multidimencional
let comida1 = (menu[0][1]);
console.log(comida1); // Output: cochinita

let estado1 = (menu[1][6]);
console.log(estado1); // Output: Yucatan

// Manipulando Arrays muldidimensionales
let producto = `El producto ${shopping2[0][1]} pertenece a la categoria de ${shopping2[1][2]}`;
console.log(producto);