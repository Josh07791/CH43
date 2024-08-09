package org.generation.colecciones;

import java.util.Arrays;
import java.util.HashSet; //Clase HashSet
import java.util.Set; //interface Set

public class HashSetCollections {
	public static void main(String[] args) {
		/*------------- *HashSet--------------*/
		// En los HashSet cada elemento es unico, no existe elementos duplicados
		Set<String> juegos = new HashSet<String>(); // Inicializar mediante la interface Set
		
		HashSet<String> animales = new HashSet<String>(); // Inicializar mediante la clase HashSet
		
		// Agregar elementos al HashSet (.addAll)
		animales.addAll(Arrays.asList("Perro", "Gato", "Conejo", "Mariposa", "Perro", "gato", "Lechuza", "Rana")); // el orden cambia por que mi equipo de ejecuta en orden distinto
		System.out.println(animales); // No muestra los duplicados y diferencia mediante el codigo ASCII
		
		// Conocer si un elemento existe dentro del Set (.contains(values))
		System.out.println(animales.contains("conejo")); //output: false porque conejo con minuscula no esta en el Array
		System.out.println(animales.contains("gato")); //output: false
		
		
		// Tamaño del Set (.size())
		System.out.println(animales.size()); // Output: 7, porque no toma los repetidos
		
		// Eliminar elementos (.remove("elemento"))
		animales.remove("Rana");
		System.out.println(animales);
		
		// Limpiar mi HashSet (.clear())
		animales.clear();
		System.out.println(animales);
		
	}
}
