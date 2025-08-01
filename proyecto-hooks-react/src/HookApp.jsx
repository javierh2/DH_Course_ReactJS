import React from 'react'
import { CounterComponent } from './components/CounterComponent'
import { FormsComponent } from './components/FormsComponent'
import { FetchComponent } from './components/FetchComponent'
import { ComputeComponent } from './components/ComputeComponent'
import { CallbackComponent } from './components/CallbackComponent'
import { TaskComponent } from './components/TaskComponent'


export const HookApp = () => {
  return (
    <>
      <h1>APLICACION DE HOOKS</h1>
      {/* <hr />
      <CounterComponent/>
      <hr />
      <FormsComponent/>
      <hr />
      <FetchComponent/>
      <hr />
      <ComputeComponent/>
      <hr /> */}
      {/* <CallbackComponent/> */}
      <TaskComponent  />
    </>
  )
}
