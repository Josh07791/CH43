package org.generation.controlDeFlujo;

import java.util.Scanner;

public class ControlFlujo {
	public static void main(String[] args) {
		/*
		 * Scanner. Metodo de java que me permite solicitar a un usuario cualquier tipo de dato
		 * Tenemos que importar la clase Scanner en nuestra clase
		 * */
		// 1. Instanciar un objeto de tipo Scanner
		Scanner scanner = new Scanner(System.in); //recibir informacion en el sistema
		// 2. Darle contexto al usuario
		System.out.println("Ingresa tu nombre");
		
		// 3. Guardar el objeto Scanner instanciado en una variable segun el tipo de dato que solicitamos
		String nombre = scanner.next();
		
		// 4. Imprimir el valor de la variable nombre
		System.out.println("Tu nombre es: " + nombre);
		
		// -- Si quiero solicitar al usuario otra informacion, puedo reutilizar el objeto de tipo Scanner instanciado
		System.out.println("Ingresa tu edad: ");
		int edad = scanner.nextInt();
		System.out.println(nombre + " tu edad es de " + edad + " años");
		
		
		/*
		 * Control de flujo. Sentencias condicionales
		 * if, else, else if, switch, operador ternario
		 * */
		// --- if, else f, else. Determinar si una persona es un bebe, un niño, adolecente, un adulto o adulto mayor
		if(edad >= 18) {
			if(edad <60) {
				System.out.println("Es un adulto");
			}else {
				System.out.println("Es un adulto mayor");
			}
		} else if(edad >= 12) {
			System.out.println("Es un adolecente");
		} else if(edad >= 3) {
			System.out.println("Es un niño");
		} else {
			System.out.println("Es un bebé");
		}
		
		// -- switch. Ingresa un numero del 1 al 7 para conocer a que dia de la semana corresponde
		System.out.println("Ingresa un numero del 1 al 7 para conocer a que dia de la semana corresponde");
		int numeroDia = scanner.nextInt();
		
		switch(numeroDia) {
		case 1:
			System.out.println("Lunes");
			break;
		case 2:
			System.out.println("Martes");
			break;
		case 3:
			System.out.println("Miércoles");
			break;
		case 4:
			System.out.println("Jueves");
			break;
		case 5:
			System.out.println("Viernes");
			break;
		case 6:
			System.out.println("Sábado");
			break;
		case 7:
			System.out.println("Domingo");
			break;
		default:
			System.out.println("Numero invalido");
			break;
		}
		
		// -- operador ternario. tenemos que establecer el tipo de dato de la salida del codigo
		int hora = 16;
		String operadorTernario = (hora < 20) ? "Buen dia" : "Buenas noches";
		System.out.println(operadorTernario);
		
		// Por buena practica debemos cerrar el scanner
		scanner.close();
		
	}
}
