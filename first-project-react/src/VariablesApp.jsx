import React from 'react'
import './VariableApp.css'
import PropTypes from 'prop.types'  // se importa el modulo de que tipo de propiedad será

export const VariablesApp = ({titulo,subtitulo,num}) => {  // desde el main

  return (
    <>
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
      <h3>{num}</h3>
    </>
  )
}

// obligatorio y un tipo de dato especifico Y REQUERIDO
VariablesApp.propTypes={
    titulo: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired
}

VariablesApp.defaultProps={
    titulo: 'curso react',
    subtitulo : 'seccion de propiedades'
}