import React from 'react'
import { useCounter } from '../hooks/useCounter'


export const CounterComponent = () => {
    const {counter,decrement,increment,reset} = useCounter(0)

  return (
    <>
        <h1>Contador</h1>
        <h4>{counter}</h4>
        <button className="btn btn-primary" onClick={() => increment()}>+1</button>
        <button className="btn btn-danger" onClick={() => reset()}>Rest</button>
        <button className="btn btn-primary" onClick={ () => decrement()}>-1</button>
    </>
  )
}
