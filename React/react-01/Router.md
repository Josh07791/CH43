# React Router
1. Instalar los modulos de React Router con el comando 
```bash
npm install react-router-dom
```
2. En el archivo `main.jsx` debemos crear una constante `router` donde vive el componente `createBrowserRouter` y dentro las rutas especificas que el usuario puede seguir.
3. Debo importar `createBrowserRouter` desde `react-router-dom`: `import { createBrowserRouter } from 'react-router-dom'`
4. Crear la primera ruta dentro de la constante router
```javascript
const router = createBrowserRouter([
  // Aqui voy a crear las rutas. Una ruta se compone de dos elementos: `path` y `element`
  {
    path: '/', element: <App /> // '/'home, element: manda a llamar a App
  }
]);
```

5. Para indicar en donde se renderiza react-router, debemos sustituir el componente `<App />` que se encuentra dentro de `<React.StrictMode>` y en su lugar, agregar el componente `<RouterProvider />` el cual va a recibir el conjunto de rutas a renderizar.