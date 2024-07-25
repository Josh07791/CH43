/* 
- Crear una función general y función flecha para verificar si un número es par o impar.
- Crear un programa para calcular la edad de una persona al día de hoy. Dicho programa también determina si es mayor o menor de edad. Utiliza función general y función flecha.
	Pista: const today = new Date();
- Crear una función general y función flecha para calcular la edad de un gatito.
         0 - 2 años gatunos = 24 años humanos
         1 año gatuno extra = 4 años humanos
*/
//- Crear una función general para verificar si un número es par o impar.
function numParImpar(num) {
    if(num % 2 === 0){
        return console.log(`El numero ${num} es par`);
    } else{
        return console.log(`El numero ${num} es impar`);
    }
}
numParImpar(15);
// función flecha para verificar si un número es par o impar.
const parImpar = num => (num % 2 === 0) ? `El numero ${num} es par` : `El numero ${num} es impar`;
console.log(parImpar(222));

//- Crear un programa para calcular la edad de una persona al día de hoy. Dicho programa también determina si es mayor o menor de edad. Utiliza función general y función flecha. Pista: const today = new Date();
function calculaEdad(fechaNac) {
    const today = new Date();
    const fnac = new Date(fechaNac);
    let edad = today.getFullYear() - fnac.getFullYear();
    const mes = today.getMonth() - fnac.getMonth();
    if (mes < 0 || (mes === 0 && today.getDate() < fnac.getDate())) {
        edad--;
    }
    return edad; }
const mayorEdad = (edad) => edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
const mayorEdad2 = (edad) => edad >= 18 ? 'puedes entrar a la fiesta' : 'no puedes entrar a la fiesta';
const fechaNac = '09/12/1998'; 
const edad = calculaEdad(fechaNac);
const resultado = mayorEdad(edad);
const fiesta = mayorEdad2(edad);
console.log(`Tu edad es: ${edad}`);
console.log(`Por lo tanto eres: ${resultado} entonces ${fiesta}`);

//
function GatitoEdad(edad)
{
    if(edad<=2){
        if(edad===1)
        {
            alert('el gato tiene 12 a;os');
        }
            
        else
        {
            alert('el gato tiene 24 a;os')
        }
    }
    else if (edad>2)
    {
        let calculo= 24+(edad*4);
        alert("el gato tiene "+ calculo + " a;os de edad");
        
    }
}
GatitoEdad(15);
let EdadGato=FunEdad=>{
    if(edad<=2)
    {
        if(FunEdad===1)
        {
            alert('el gato tiene 12 a;os');
        }
            
        else
        {
            alert('el gato tiene 24 a;os')
        }
    }
    else if (FunEdad>2)
    {
        let calculo= 24+(FunEdad*4);
        alert("el gato tiene "+ calculo + " a;os de edad");
    }
}
EdadGato(10);
