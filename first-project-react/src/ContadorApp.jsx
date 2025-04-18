import React from 'react'

export const ContadorApp = ({counter}) => {
    console.log(counter)
  return (
    <>
        <button onClick={() => counter + 1}>Agregar uno</button>
    </>
  )
}
