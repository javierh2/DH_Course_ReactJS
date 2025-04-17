import React from 'react'
import './VariableApp.css'

export const VariablesApp = ({objeto} ) => {
  console.log(objeto)

  return (
    <>
      <h1>PROPS:</h1>
      <h2>{JSON.stringify(objeto.nombre)}</h2>
      <h2>{JSON.stringify(objeto.apellido)}</h2>
      <p>{objeto.nombre}</p>
    </>
  )
}
