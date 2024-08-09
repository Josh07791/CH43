package org.generation.loops;

import java.util.Scanner;

public class Ejercicios {
	public static void main(String[] args) {
		double primaMensual;
		int limiteEmpleados;
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingresa el numero de empleados a calcular la prima de seguro:");
		limiteEmpleados = scanner.nextInt();
		
		for(int i = 1; i<=limiteEmpleados; i++ ) {
			System.out.println("Ingresa tu edad:");
			int edad = scanner.nextInt();
			System.out.println("Ingresa tus ingresos mensuales");
			double ingresosMensual = scanner.nextDouble();
			
			if(edad >= 70) {
				primaMensual = 500;
			}else if(edad >= 50 && edad <= 69) {
				primaMensual = 400;
			}else if(edad >= 30 && edad <= 49) {
				primaMensual = 250;
			}else {
				primaMensual = 100;
			}
			
			if(ingresosMensual >= 300) {
				primaMensual = primaMensual * 1.1;
			}else {
				primaMensual = primaMensual * 1.05;
			}
			
			System.out.println("Su prima mensual es de: " + primaMensual + "\n\n");
		}
		System.out.println("\u001B[33mEl programa ha finalizado\u001B[37m");
		
		
		// Reto 2
		int opcion;
		double dinero = 0;
		String movimientos = " ", opcionSubMenu = " ";
		System.out.println("Ingresa tu nombre de usuario:");
		String usuario = scanner.next();
		System.out.println("Ingresa tu contraseña");
		String password = scanner.next();
		if(!usuario.isEmpty() && !password.isEmpty()){
			do{
				System.out.println("\n\n--- Menu --- \nIngresa el numero de la opcion que deseas seleccionar");
				System.out.println("1. Consultar Saldo\n2. Ingresar dinero\n3.Retirar dinero\n4.Consulta sus ultimos movimientos\n5. Convertir divisas\nPara salir, precione 0");
				opcion = scanner.nextInt();
				switch(opcion) {
				case 1:
					do {
						System.out.println("El saldo de tu cuenta es de: $" + dinero);
						System.out.println("Deseas regresar al menu? S/N");
						opcionSubMenu = scanner.next();
					}while(opcionSubMenu.equals("N"));
					break;
				case 2:
					do {
						System.out.println("Ingresa el monto que deseas ingresar a tu cuenta:");
						dinero = scanner.nextDouble();
						System.out.println("Se ingreso a la cuenta: $" + dinero);
						movimientos = movimientos + "Se ingreso a la cuenta: $" + dinero + "\n";
						System.out.println("Deseas regresar al menu? S/N");
						opcionSubMenu = scanner.next();
					}while(opcionSubMenu.equals("N"));
					
					break;
				case 3: 
					do {
						System.out.println("Saldo actual: " + dinero +"Ingresa el monto que deseas retirar a tu cuenta:");
						double retiro = scanner.nextDouble();
						if(retiro < dinero) {
							dinero -= retiro;
							System.out.println("Se retiro con exito!!");
							movimientos = movimientos + "Se retiro de la cuenta: $" + retiro + "\n";					
						} else {
							System.out.println("No cuentas con fondos suficientes\nDeseas volver ingresar otro monto? S/N");
							opcionSubMenu = scanner.next();
						}
						System.out.println("Deseas retirar nuevamente? S/N");
						opcionSubMenu = scanner.next();
					}while(opcionSubMenu.equals("S"));
					System.out.println("Se regresara al menu");
					
					break;
				case 4:
					do {
						if(movimientos.equals(" ")) {
							System.out.println("No cuentas con movimientos preevios");
						} else {
							System.out.println("Tus ultimos movimientos han sido: " + movimientos);
						}
						System.out.println("Deseas regresar al menu? S/N");
						opcionSubMenu = scanner.next();
					}while(opcionSubMenu.equals("N"));
					break;
				case 5:
					do {
						System.out.println("Ingresa la cantidas que se convertira en dolares");
						double monto = scanner.nextDouble();
						int dolar = (int)(monto / 19.58);
						dinero -= dolar*19.58;
						System.out.println("Se convirtio $" + monto + " a " + dolar + " Dolares");
						movimientos += "Se convirtio $" + monto + " a " + dolar + " Dolares, El saldo actual es: " + dinero;
						System.out.println("Deseas regresar al menu? S/N");
						opcionSubMenu = scanner.next();
					}while(opcionSubMenu.equals("N"));
					break;
				default:
					System.out.println("Opcion no valida!!");
					break;
				}
			}
			while(opcion != 0);
			System.out.println("\u001B[33mEl programa ha finalizado\u001B[37m");
		}else {
			System.out.println("El usuario o contraseña esta vacio");
		}
		
		
		
		
		
		
		scanner.close();
	}
}
