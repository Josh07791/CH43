import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInSide from './components/Login/SignIn.jsx'
import Astros from './components/Astros/Astros.jsx'

const router = createBrowserRouter([
  // Aqui voy a crear las rutas. Una ruta se compone de dos elementos: `path` y `element`
  {
    path: '/', element: <App /> // '/'home, element: manda a llamar al componente
  },
  {
    path: 'login', element: <SignInSide />
  },
  {
    path: 'astros-api', element: <Astros />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(//renderizar el dom virtual
  <React.StrictMode>
    <RouterProvider router={ router }/> 
  </React.StrictMode>,
)
