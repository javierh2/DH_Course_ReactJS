import React from 'react'
import { CounterApp } from './components/CounterApp'
import { FormsApp } from './components/FormsApp'
import { FetchApp } from './components/FetchApp'
import { CalculoApp } from './components/CalculoApp'

export const HookApp = () => {
  return (
    <>
      <h1>APLICACION DE HOOKS</h1>
      <hr />
      {/* <CounterApp/> */}
      <hr />
      {/* <FormsApp/> */}
      <hr />
      {/* <FetchApp/> */}
      <hr />
      <CalculoApp/>
    </>
  )
}
