//Parte 1
const personasBanco = ['Sofía', 'David', 'Juan'];
console.log(personasBanco); // sin cambios
personasBanco.sort();
console.log(personasBanco); // ordenado asc

//Parte 2
personasBanco.push('Sara', "Agustín");
console.log(personasBanco);

personasBanco.shift();
console.log(personasBanco);

//Parte 3 duda no entiendo lo que pide muy bien
personasBanco.unshift('David');
personasBanco.splice(1, 0, 'Renata'); //1 es la posision que se agregara, 0 es los elementos que se eliminara y 'renata' es el elemento a agregar
personasBanco.push('Elena');
console.log(personasBanco);
