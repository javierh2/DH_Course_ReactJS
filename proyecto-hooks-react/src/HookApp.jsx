import React from 'react'
import { CounterComponent } from './components/CounterComponent'
import { FormsComponent } from './components/FormsComponent'
import { FetchComponent } from './components/FetchComponent'
import { CalculoComponent } from './components/CalculoComponent'


export const HookApp = () => {
  return (
    <>
      <h1>APLICACION DE HOOKS</h1>
      <hr />
      <CounterComponent/>
      <hr />
      <FormsComponent/>
      <hr />
      <FetchComponent/>
      <hr />
      <CalculoComponent/>
    </>
  )
}
