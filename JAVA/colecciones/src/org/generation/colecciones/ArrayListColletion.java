package org.generation.colecciones;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ArrayListColletion {
	public static void main(String[] args) {
		/* ------- Arrays -------*/
		String[] nombres = {"Josue", "Victor", "Eduardo"};
		int[] edades = {25, 24, 28};
		
		// Imprimir Arrays. Debemos utilizar un metodo de Arrays que nos permite convertir los elementos en String
		System.out.println(Arrays.toString(nombres));
		System.out.println(Arrays.toString(edades));
		
//		for(int i=0; i<nombres.length; i++) {
//			System.out.println(nombres[i]);
//		}
		
		// Acceder a un unico elemento
		String nombre1 = nombres[1];
		System.out.println(nombre1);
		
		// Longitud del array
		System.out.println(edades.length);
		
		// Mostrar todos los elementos del array en forma de lista (forEach)
		for(String nombre : nombres) {
			System.out.println(nombre);
		}
		
		/*----------- ArrayList------------------*/
		// Es un array que puede cambiar de tamaño y que permite elementos duplicados
		List<Double> salarios = new ArrayList<Double>(); //Inicializando desde la interface List, recibiendo datos de tipo Wrapper class (clase envoltura) Integer, Double, Caracter, Byte
		
		ArrayList<String> peliculas = new ArrayList<String>(); ////Inicializando desde la clase ArrayList, recibiendo datos de tipo Wrapper class (clase envoltura) Integer, Double, Caracter, Byte
		
		//Agregar valoes a los ArrayList (.add)
		salarios.add(40000.00d);
		salarios.add(50000.00d);
		salarios.add(20000.00d);
		
		peliculas.add("La vida es bella");
		peliculas.add("Transformers");
		peliculas.add("Duro de matar 4");
		
		System.out.println(salarios);
		System.out.println(peliculas);
		
		// Acceder a elementos especificos del ArrayList (.get(index))
		double salario2 = salarios.get(1);
		System.out.println(salario2);
		
		// Modificar un elemento del ArrayList (.set(index, newValue))
		salarios.set(2, 41692.18d);
		System.out.println(salarios);
		
		// Agregar un nuevo elemento a salarios
		salarios.add(11244.33d);
		
		// Acceder al ultimo elemento del ArrayList (.size()-1)
		Double ultimoElemento = salarios.get(salarios.size()-1);
		System.out.println(ultimoElemento);
		
		// Imprimir los 4 elementos de salarios
		System.out.println(salarios);
		
		// Eliminar un elemento (.remove(value))
		salarios.remove(salarios.size()-1);
		System.out.println(salarios);
		
		// Recorrer un ArrayList y mostrar los elementos como lista (forEach)
		for (double salario : salarios) {
			   System.out.println(salario);
		}
		
	}
}
