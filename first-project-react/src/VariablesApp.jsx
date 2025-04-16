import React from 'react'
import './VariableApp.css'

export const VariablesApp = () => {
  const active = true
  const style ={
    color : active ? 'red' : 'blue',
    fontSize : '20px'
  }
  return (
    <>
      {/* <h1 className={active ? 'active' : 'inactive'}>Clase de Estilos</h1> */}

      <h1 style={style}> OTRA FORMA</h1>
    </>
  )
}
