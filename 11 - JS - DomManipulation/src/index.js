// Accediendo a los diferentes elementos del documento HTML utilizando su etiqueta, su clase o su id.

//Acceder mediante el id: document.getElementsById("id");
const tituloH1 = document.getElementById('title1');
const tituloH2 = document.getElementById('title2');

console.log(tituloH1); // Trae el elemento completo (con etiquetas y atributos)
console.log(tituloH2);
console.log(tituloH1.innerText); // Recupero solamente el texto que vive entre el elemento. Output: Dom Manipulation

// Acceder a los elementos mediante clases: document.getElementsByClassName('class');
const titulos = document.getElementsByClassName('title');
console.log(titulos); //Me muestra todos los elementos de la misma clase como una coleccion HTML
console.log(titulos.length); //Output: 4
console.log(typeof titulos); //Output: Object. Array es objetos

//Acceder a los elementos mediante su etiquueta: document.getElementsByTagName('etiueta');
const titulosH3 = document.getElementsByTagName('h3');
console.log(titulosH3); //Muestra los elementos con la etiqueta h3

// Acediendo a elementos mediante selectores CSS (. #). Utilizaremos querySelector y nos permite acceder al primer elemento de una clase o al elemento con cierto id
const titulo4 = document.querySelector('#title4');
console.log(titulo4);

const titulo = document.querySelector('.title');
console.log(titulo);

//querySelectorAll('');
const titulosQuery = document.querySelectorAll('.tite');
console.log(titulosQuery);

// -- Modificando los elementos mediante manipulación del DOM.
tituloH1.style.textAlign = 'center';
tituloH1.style.color = '#E1523D';

// Modificar el texto existente de un elemento con innerText para acceder y modificar el texto del elemento.
tituloH2.innerText = 'Sesión de Manipulación del DOM con JS';
tituloH2.style.color = '#C2BB33';

/* -- Crear nuevos elementos como nodos. Este proceso se divide en dos: crear el nodo y agregar el nodo.
*   - Crear nodos:
        document.createElement('tipoElemento'); ----> Crear elementos a partir de etiquetas
        document.createTextNode('string'); ----> Crea texto dentro de las etiquetas

*   - Insertar los nodos 
        parentNode.appendChild(node);
        parentNode.append(node);
        parentNode.insertBefore(node);
        parentNode.insertAdjacentElement(node);
*/

const tituloH4 = document.createElement('h4'); //Creando elemento h4
const imgNode = document.createElement('img'); //Creando elemento img

const textoTituloH4 = document.createTextNode('Imagen agregada desde el DOM'); //Creando el texto que vivirá dentro del nodo tituloH4

// -- Tengo creados dos nuevos elementos (nodos) h4 e img. Hay que agregarlos como nodos hijos de un nodo padre
// 1. Obtengo el nodo padre (parentNode) mediante su id: id='img--container';
const imgPadre = document.getElementById('img--container');

// 2. Agrego el texto creado al nodo creado (h4)
tituloH4.appendChild(textoTituloH4);

// 3. Mandar a llamar el parentNode (imgPadre) e insertar los nodos hijos (h4 y img)
imgPadre.appendChild(tituloH4);
imgPadre.style.color ='#A1C7E0';

// 4. Agregando las propiedades de imagen necesarias para configurar el nodo de imagen
imgNode.src = '../public/bob_ross_lego.png';
imgNode.width = '300';
imgNode.at = 'lego bob ross';

// 5. Agregando la imagen al parentNode (imgPadre)
imgPadre.appendChild(imgNode);

// outerHtml. Nos permite vizualizar al elemento, es otra manera de acceder
let infoH4 = tituloH4.outerHTML;
console.log(infoH4);

//Otra manera de manipular el texto del elemento
tituloH2.innerHTML = 'Manipulacion del Dom en CH43';