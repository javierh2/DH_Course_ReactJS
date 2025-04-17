import React from 'react'
import './VariableApp.css'

// uso de un funcional component dentro de otro
// aunque se encapsula dentro del export para ser enviado
// se puede consumir solo desde adentro
const Button = ({title}) =>{
  return <button>{title}</button>
}

export const VariablesApp = () => {
  return (
    <>
      <Button title='Soy un functionarrow button'/>
    </>
  )
}
