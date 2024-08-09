package org.generation.tiposdedatos;

public class DatosYVariables {

	public static void main(String[] args) {
		System.out.println("Hola mundo");
		
		/*Tipos de datos
		 * Numeros enteros
		 * byte
		 * short
		 * int
		 * long
		 * numeros decimales
		 * float
		 * double
		 * caracteres
		 * char
		 * boolean
		 * cadena de texto
		 * string */


		/*Operdores aritemeticos
		 * + suma
		 * - resta
		 * * multiplicacion
		 / division
		  * % residuo*/

		/*Operadores de comparacion
		 * == compara si un operando es igual a otro
		 * === igualdad estricta
		 * != compara si es diferente
		 * < menor que
		 * > mayor que
		 * <= menor o igual que
		 * >= mayor o igual que*/
		
		/* Operadores lógicos
		* && and
		* || or
		* ! not*/
		
		// Cine
		byte numeroDeSalas = 8;
		short asientosPorSala = 120;
		int entradasVendidas = 75;
		int totalAsientos = numeroDeSalas * asientosPorSala;
		long ingresosTotales = 35000;
		float precioEntrada = 99.99f;
		double precioCombo = 249.00;
		char letraAsiento = 'c';
		boolean estaAbierto = true;
		String nombreCine = "Blockbuster";
		
		System.out.println("Cine: " + nombreCine);
		System.out.println("Número de Salas: " + numeroDeSalas);
		System.out.println("Entradas vendidas: " + entradasVendidas);
		System.out.println("Total de Asientos: " + totalAsientos);
		System.out.println("Ingresos totales: " + ingresosTotales);
		System.out.println("Precio de la entrada: $" + precioEntrada);
		System.out.println("Precio del combo: " + precioCombo);
		System.out.println("Asiento: " + letraAsiento);
		System.out.println("¿Estas abierto? " + ((estaAbierto == true) ? "Sí" : "No"));
		
		//Operaciones aritmeticas
		int totalEntradas = asientosPorSala - entradasVendidas;
		System.out.println("Entradas restantes: " + totalEntradas);
		
		//Conversion de datos que no utiliza metodos (casteo)
		
		// Casteo a entero
		int precioEntradaEntero = (int)precioEntrada;
		int precioComboEntero = (int)precioCombo;
		
		System.out.println("Precio del boleto: " + precioEntradaEntero);
		System.out.println("Precio del combo: " + precioComboEntero);
		
		//Entero a long
		long entradasVendidasLong  = (long)entradasVendidas;
		System.out.println("Totald e bletos: " + entradasVendidasLong);
		
		// Entero a String
		String entradasVendidasString = Integer.toString(entradasVendidas);
		System.out.println("Boletos Vendidos " + entradasVendidasString);
		
		//String a entero
		String entradasString = "75";
		int entradasEntero = Integer.parseInt(entradasString);
		System.out.println("Entradas: "  + entradasEntero);
		
		//String a double
		String precioComboString = "256.98";
		double precioComboDouble = Double.parseDouble(precioComboString);
		System.out.println("Nuevo precio del combo: "  + precioComboDouble);
		
		/*
		 * Ejercicio
		 * 	1. Calcular los ingresos por entradas.
			2. Calcular los ingresos por ventas de palomitas.
			3. Calcular los ingresos por ventas de bebidas.
			4. Calcular el total de ingresos combinando entradas, palomitas y bebidas.
			5. Mostrar los ingresos totales.
			
			Determinar si los clientes pueden obtener un descuento basado en su edad o condición de estudiante.
			
			- Determinar si el cliente tiene menos de 12 años, más de 65 años, o es estudiante.
			20% de descuento en la entrada
		 * */
		System.out.println(" ");
		System.out.println("Ejercicio Cine");
		int entradasSolicitadas = 2;
		float precioPalomitas = 150f;
		float precioBebidas = 85f;
		float totalPago = 0;
		long edad = 12;
		boolean estudiante = false;
		float descuento = 0.20f; 
		double total = 0;
		System.out.println("Ingreso por Entrada: $" + entradasSolicitadas * precioEntrada);
		System.out.println("Ingreso por palomitas: $" +  entradasSolicitadas * precioPalomitas);
		System.out.println("Ingreso por bebidas: $" + entradasSolicitadas * precioBebidas);
		
		totalPago = entradasSolicitadas * precioEntrada + entradasSolicitadas*precioPalomitas + entradasSolicitadas*precioBebidas;
		System.out.println("El total de ingresos combinando entradas, palomitas y bebidas: $" + totalPago);
		
		if(edad < 12 || edad > 65 || estudiante == true) {
			totalPago = totalPago - (totalPago * descuento);
			System.out.println("Total a pagar: $" + totalPago + " haciendo valido un descuento del 20%");
		}else {
			System.out.println("Total a pagar: $" + totalPago);
		}
		
		
		
		
	}

}
