// Crear pruebas unitarias para cada metodo del objeto calculadora (sumar, restar, multiplicar, dividir). para evaluar division entre 0 y para obtener un valor cercano al esperado
// Importar la funcion u objeto que voy a testear
const calculator = require('../modules/calculadora');

// Estructura de una prueba unitaria en Jest: test('string', callback => {expect(function).toBe(resultado)})
 test('Suma de dos  numeros', () =>{
     expect(calculator.suma(10, 20)).toBe(30);
 });

 test('Suma de dos  numeros', () =>{
     expect(calculator.suma(45, 60)).toBe(105);
 });

 // resta, multiplicacion, division, division entre 0 y la de numero aproximado
 test ('Resta de dos numeros', () => {
     expect(calculator.resta(15, 9)).toBe(6);
 });

 test ('Multiplicacion de dos numeros', () => {
     expect(calculator.multiplicacion(5, 9)).toBe(45);
 });

 test ('Division de dos numeros', () => {
     expect(calculator.division(15, 3)).toBe(5);
 });

test ('Division entre 0', () => {
    expect(() => calculator.division(15, 0)).toThrow('No se puede dividir por 0');
});

test ('Division obtener un valor cercano al esperado', () => {
    expect(calculator.division(55, 77)).toBeCloseTo(0.714285714285714285, 4); //.toBeCloseTo(todos los decimales, numero de decimales que deseamos tomar)
});

test ('Division obtener un valor cercano al esperado', () => {
    expect(calculator.division(55, 77)).toBeCloseTo(0.71); //.toBeCloseTo(decimales que deseamos tomar)
});