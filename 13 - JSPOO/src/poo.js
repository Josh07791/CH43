/*
POO
 * Clase : se refiere a nuestro molde o plantilla para que podemos crear objetos.
 * Constructor: Es una caracteristica especifica de las clases que nos ayuda a construir al objeto
 * Objeto: es lo que construimos a traves de la clase y el constructor pero con atributos especificos
 
 * Abstraccion:  se refiere a reducir al objeto lo mas posible
 * Herencia: Cuenta con la palabra reservada extends y con ella podemos heredar atributos de una clase a otra
 * Encapsulamiento: Consiste en como voy a manejar los datos y hasta donde van a tener acceso mis usuarios.
 * Polimorfismo: Consiste en ver como se comporta un objeto de forma distinta ante un miso metodo de acuerdo a sus propiedades
 
 Principio Solid
 * Principio de Responsabilidad Unica (SRP): se refiere a que cada que asignamos una clase, objeto, este debe ser unica.
 * Principio de Abierto/Cerrado (OCP): se refiere a que debemos poder extender el codigo ya existente de ser necesario.
 * Principio de sustitucion de Liskov (LSP):  se refiere a que podemos tener cualquier tipo de dato dentro de mi objeto y al pertenecer a la misma clase no debe afectar
   el comportamiento de mi objeto.
 * Principio de Segregacion de interfaces (ISP): se refiere a que es mejor tener distintas interfaces especificas a una sola muy grande.
 * Principio de Inversion de dependencia (DIP): se refiere a que en lugar de que el codigo dependa de detalles especificos lo haga a traves de abstracciones.
 
 * 
 */

class ch43 {// Clase para Toda la cohorte 43 (Todxs sus integrantes)
    constructor(nombre, apellido, email, edad) { // caracteristicas de la clase ch43
        this.name = nombre;
        this.lastName = apellido;
        this.email = email;
        this.age = edad;
        this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es ${this.email} y mi edad es ${this.age}`;
    }
    
    //Metodo es dentro de la clase y NO SE PUEDEN FUNCIONES FLECHA
    infoIntegrantes (){
        console.log(this.info);
    }
}

//Herenncia con respecto a ch43(padre) a participantes(hija) usando extends
class participante extends ch43 {
    constructor(nombre, apellido, edad, email, telefono){
        super(nombre, apellido, email, edad); //super se utiliza dentro del constructor para decir que se trata de una clase hija y se quiere heredar
        this.number = telefono;
    }

    //Metodos estaticos, no necesita que la clase se defina para poder ser creado
    static canvas(){
        console.log("Ya estas registradx");
    }

}

class instruccion extends ch43 {
    constructor(nombre, apellido, edad, email, licenciatura){
        super(nombre, apellido, email, edad); //super se utiliza dentro del constructor para decir que se trata de una clase hija y se quiere heredar
        this.deGree = licenciatura;
    }

    static darSessiones(){
        console.log("Hoy no tienes session");
    }

    // Metodos getters y setters
    //set (Actualizar): podemos modificar un valor
    set setDeGree(newDeGree){
        this.deGree = newDeGree;
    }

    //get (Traerlo): obtener un valor o crear
    get getDeGree(){
        return this.deGree;
    }

}


/*Funcion es fuera de la clase
const infoIntegrantes = () => {
    console.log(this.info);
} */



const inte1 = new participante("Aparicio", "Huerta", "aparicio@gmail.com", 29, "5574986321");
const inte2 = new ch43("Yereri", "Arcos", "yare@gmail.com", 29);
const inte3 = new instruccion("Daniel", "Maldonado", "dani@gmail.com", 35, "Licenciatura");
const inte4 = new ch43("Tadeo", "Zepeda", "tadeo@gmail.com", 26);
const inte5 = new participante("Adrian", "Becerra", "adrian@gmail.com", 24, "5521457862");
const inte6 = new participante("Alan", "Pacheco", "alan@gmail.com", 29, "5587521984");
const inte7 = new participante("Lizbeth", "Zarazua", "liz@gmail.com", 25, "5569278012");

//console.log(inte7.info);

inte5.infoIntegrantes();
inte1.infoIntegrantes();
inte3.infoIntegrantes();

participante.canvas();
instruccion.darSessiones();

inte3.setDeGree = "Maestria";
console.log(inte3.deGree);

    fetch(`./src/ejemplo.json`)
        .then(response => response.json())
        .then(data => {
            data.forEach(participanteData =>{
                const { nombre, apellido, email, edad, telefono} = participanteData;
                const nuevoParticipante = new participante(nombre, apellido, email, edad, telefono);
                nuevoParticipante.infoIntegrantes();
            })
        })
        .catch(error => {
            alert (`Hubo un error al cargar los datos`);
            console.error(`Èrror el cargar`, error);
        });

