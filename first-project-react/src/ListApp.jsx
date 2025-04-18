import React from 'react'

export const ListApp = ({cantidad}) => {
  return (
    <>
        {cantidad > 0 &&  <p>tienes {cantidad} tareas pendientes</p>}
    </>
  )
}