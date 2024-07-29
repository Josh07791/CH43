# Crear un nuevo paquete de npm desde cero. 

## Pasos para crear el proyecto
1. Inicializar CLI en el directorio del proyecto y ejecutar el comando para inicializar npm
```bash
npm init
```
2. Seguir las instrucciones de CLI: package name (nombre único), version, description, entry point (archivo js de entrada), test command, git repository, keywords, author, license.
3. Podemos observar que se crea el archivo `package.json` con la información que proporcionamos.
4. Como definimos un entry point con el nombre `index.js`, hay que crear dicho archivo en main ya que aquí ejecutaremos nuestro package.
5. Crear una carpeta llamada `modules` en donde vivirá nuestro módulo (lógica de nuestro package)
6. Dentro de la carpeta modules, crear un archivo `parImpar.js` para desarrollar la logica del package
Aqui programamos la funcion que nos permite determinar si un número es par o impar (código funcional de mi package).
7. Exportamos la función creada utilizando el comando:
```javascript
export default determinarParImpar;
```
8. Importar mi función en `index.js` para poder utilizarla.
```javascript
import function from "route.js"
```
9. Modificar `package.json` para ermitirecucion de modulos deEcmaScript (ES modules) agregando `"type": "module"` debajo de la clave-valor de `"main": "index.js"`

Ejecutar el archivo `index.js` con el comando
```bash
node index.js
```
---

## Pasos para publicar un package en npm
1. Registrarse en el sitio web de npm
[npm](https://www.npmjs.com/)
2. Ejecutar el comando de inicio de sesión de npm
```bash
npm login
```
3.  Publicar nuestro package con visibilidad publica en npm utilizando CLI
```bash
npm publish --access=public
```



