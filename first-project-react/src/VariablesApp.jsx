import React from 'react'
import './VariableApp.css'


// forma de manejar eventos MÁS comun y en caso de agregar otro parametro
// export const VariablesApp = () => {
//   const handleClick = (event, param2) =>{
//     console.log(event, param2)
//   }
//   return (
//     <>
//         <button onClick={(event) => handleClick(event, 'soy otro manejo de parámetro')}>
//           soy un boton
//         </button>
//     </>
//   )
// }

// FORMA DE MANEJAR UN EVENTO
export const VariablesApp = () => {
  const handleClick = (event) =>{
    console.log(event)
  }
  return (
    <>
        <button onClick={handleClick}>
          soy un boton
        </button>
    </>
  )
}