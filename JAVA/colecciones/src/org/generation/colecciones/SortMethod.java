package org.generation.colecciones;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.TreeSet;

public class SortMethod {
	public static void main(String[] args) {
		/*---- Metodo Sort -----*/
		// Permite ordenar los elementos de una Collections
		ArrayList<Integer> edades = new ArrayList<Integer>();
		
		edades.addAll(Arrays.asList(23, 25, 37, 23, 26, 28, 26, 29, 28, 22, 27, 30, 32, 25));
		System.out.println(edades); // muestra todos los elementos en el orden en que fueron agregados
		
		// Ordenar elementos de Collection tomando como referencia la tabla ASCII (Collections.sort(collection))
		Collections.sort(edades);
		System.out.println(edades); // Muestra todos los elementos ordenados
		
		// 2 opciones para order descendente
		Collections.sort(edades, Collections.reverseOrder());
		System.out.println(edades);
		
		Collections.reverse(edades);
		System.out.println(edades); //invierte el orden este es la opcion 2
		
		//Nota: No podemos ordenar un HashSet. Si queremos mostrar los elementos ordenados de un Set utilizaremos TreeSet, que nos muestra los elementos ordenados y omite los repetidos
        TreeSet<Integer> salarios = new TreeSet<Integer>();
		
		// Agregar elementos al HashSet (.addAll)
		salarios.addAll(Arrays.asList(12000, 14000, 29000, 14000, 22000)); // ya los ordena
		System.out.println(salarios);
	}
}
