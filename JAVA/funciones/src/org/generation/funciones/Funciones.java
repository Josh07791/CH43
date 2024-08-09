package org.generation.funciones;

import java.util.ArrayList;
import java.util.List;

public class Funciones {
	
	public class Juguetibici { //clase
		
		static class Producto { //objeto
			String nombre;
			double precio;
			
			Producto (String nombre, double precio){//constructor
				this.nombre = nombre;
				this.precio = precio;
			}
		}
	
		static class CarritoCompra { //objeto
			List<Producto> productos = new ArrayList<>();
			
			void agregarProductos(Producto barbie) {
				productos.add(barbie);
			}
			
			double calcularTotal() {
				double total = 0;
				for(Producto barbie : productos) {
					total += barbie.precio;
				}
				return total;
			}
			
			double calcularDescuento(double porcentajeDescuento) {
				double total = calcularTotal();
				return total = (porcentajeDescuento /100);
			}
	
			double calcularImpuestos(double porcentajeImpuestos) {
				double total = calcularTotal();
				return total = (porcentajeImpuestos /100);
			}
			
			double calcularTotalGeneral (double totalGeneral, double impuestos, double descuentos) { 
				double impuestos1 = totalGeneral + calcularImpuestos(impuestos);
				double descuento1 = totalGeneral - calcularDescuento( descuentos);
				totalGeneral = totalGeneral - descuento1 + impuestos1;
				return totalGeneral;
			}
			
		}
	}
	
	
	
	public static void main(String[] args) {
		Juguetibici.Producto muñeca1 = new Juguetibici.Producto("Barbie", 185.90);
		Juguetibici.Producto muñeca2 = new Juguetibici.Producto("Chelse", 125.99);
		Juguetibici.Producto muñeca3 = new Juguetibici.Producto("Skipper", 145.99);
		
		Juguetibici.CarritoCompra carrito = new Juguetibici.CarritoCompra();
		carrito.agregarProductos(muñeca1);
		carrito.agregarProductos(muñeca3);
		
		double totalCarrito = carrito.calcularTotal();
		System.out.println("Total $" + totalCarrito);
	}

}
