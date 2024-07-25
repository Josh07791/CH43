/** Fetch API. Consumiendi APIs
 * Trabajamos con promesas que se debe cumplir o rechazar. Para ello  realizaremos peticiones especificas.
 * Necesitamos una API que viva en un servidor
 */

const url = `https://jsonplaceholder.typicode.com/users`;

// Creando el Fetch para obtener (GET) datos de una API
fetch(url)// puedes ponerlo directo o por variable
    //Guardo los datos de la API en una variable data, la mando a llamar y la convierto de JSON a Object
    .then(data => data.json()) //.then(data) o ,then(response)
    // Ya puedo usar esa informacion para realizar acciones
    .then(data => {
        console.log(data); //Consumiendo la API
        console.log(data[0]); //Recuperando el primer elemento de la API
        console.log(data[4].name); 
    })
    .catch(error => console.error('Cuidado, ¡Es un error!', error));

//Objeto que enviaremos a la API mediante metodo POST
const publicacion = {
    userId: 1986,
    id: 123456789,
    title: 'Creando API',
    body: 'Estoy consumiendo una API y enviando informacion al servidor remoto para visualizarlo en la consola'
}    

//--- Creando el fetch para enviar (POST) datos a una API. Para POST si debemos que poner el Header
fetch(`https://jsonplaceholder.typicode.com/posts`, {
    // Indicar el tipo de metodo HTTP
    method: 'POST',
    // Definir los headers
    headers: {'Content-type': 'application/json; charse=UTF-8'},
    // Definir el cuerpo del Objeto que va a enviar a la API
    body: JSON.stringify(publicacion)
})
    .then(response => response.json())
    .then(response =>{
        console.log(response);
    })
    .catch(error => console.error(error))

// 2. Consumir APIs mediante funciones asncronas
//--- asynch - await. Consumir APIs mediante funciones asincronas
const getUser = async () =>{
    try {
        // Controlar el tiempo de ejecucion de la funcion a traves de un delay(retraso)
        await new Promise(resolve => {
            setTimeout(resolve, 100) //setTimeout(resolve, 5000milisegundo = 5 segundos)
        });

        //Intentar que se cumpla la promesa
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

getUser();



// 1. Consumir una API y usar su informacion para mostrar algo en el frontend (Manipulancion del DOM)