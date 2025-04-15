# DH_Course_ReactJS
ingresar info del curso y grilla de estudio
uso de VITE
uso de nodeJS e importar VITE  poner los npm

npm create vite@latest

  cd first-project-react
  npm install
  npm run dev



EJ 1 
// creando un componente
// más básica de functional components semejante a una funcion de flecha
// import React from 'react'

// export const PorfolioApp = () => { // esto se importa al main para que funcione
//   return (
//     <div>PorfolioApp
//         <h1>Esta es mi aplicacion de React</h1>
//         <h4>este es tambien mi primer componente llamado porfolio</h4>
//         <p>y es un RFC </p>
//     </div>
//   )
// }


// componente de clase
// snippet RCE
// el manejo de estados se hace desde el this.state y se coloca en un constructor

// import React, { Component } from 'react'
// export class PorfolioApp extends Component {
  // constructor(){
  //   this.state = []
  // }
//   render() {
//     return (
//       <div>PorfolioApp jajaja
//         <h1>Esta es mi aplicacion de React</h1>
//         <h4>este es tambien mi segundo componente DE CLASE llamado porfolio</h4>
//         <p>y es un RCE </p>
//       </div>
//     )
//   }
// }

// export default PorfolioApp

--------------------------------------------
ESTE ES EL MAIN


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  PorfolioApp  from './PorfolioApp'
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PorfolioApp/>   // IMPORTACION DEL COMPONENTE
  </StrictMode>,
)
