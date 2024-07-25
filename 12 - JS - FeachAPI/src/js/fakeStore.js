//--- Voy a mostrar lso productos de la Fake Store API en el div vacio despues de presionar el boton

// MAndar a llamar los elementos parra poder manipular el DOM
const botonProductos = document.getElementById('button--store');
const tienda = document.getElementById('store');
let productos = null;
const url = `https://fakestoreapi.com/products`;

// Agregar un evento de tipo Click para el boton
botonProductos.addEventListener('click', () => {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            productos = response;
            // Invocar una funcion con parametros para mostrar los productos (hoisting)
            mostrarProductos(productos);
        })
        .catch(error => console.error(error))
});

// Crear funcion 'mostrarProductos' que nos permite, crear, añadir elementos mediante la manipulacion del DOM 
const mostrarProductos = (productos) =>{
    productos.map((producto) => {
        // el metodo map me permite recorrer toda la API como si fuera un array de arrays tomando cada producto con el nombre `producto`

        // 1.Crear elementos HTML en donde voy a ir guardando cada parte del producto (title<h2> image<img> price<h3> description<p> <hr>)
        const  titulo = document.createElement('h2');
        const  imagen = document.createElement('img');
        const  precio = document.createElement('h3');
        const  descripcion = document.createElement('p');
        const  separador = document.createElement('hr');

        // 2. Llenar lso elemnetos creados. Podemos utilizar innerHTML para llenarlo con los datos del objeto. Para ellos mandamos a llamar las claves del objeto
        titulo.innerHTML = producto.title;
        imagen.src = producto.image;
        imagen.width = 200;
        precio.innerHTML = `$${producto.price}`;
        descripcion.innerHTML = producto.description; //producto.elemto de la api;

        // 3. Agregar los nodos en el nodo Padre
        tienda.appendChild(titulo);
        tienda.appendChild(imagen);
        tienda.appendChild(precio);
        tienda.appendChild(descripcion);
        
    })
};


// title<h2> image<img> price<h3> description<p>