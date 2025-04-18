import React from 'react'

const Item = ({name, isDone}) =>{
    // return <li>{name} - {isDone ? 'done' : 'doing'}</li>  OPERADOR TERNARIO PARA MOSTRAR BOOLEANO
    // return <li>{name} - {isDone && 'done'}</li>  OPERADOR TERNARIO PARA MOSTRAR UN SOLO VALOR BOOLEANO
}

export const ListApp = () => {
  return (
    <ul>
        <Item name='HTML' isDone={true}/>
        <Item name='js imperativa' isDone={true}/>
        <Item name='js dom' isDone={true}/>
        <Item name='react' isDone={false}/>
    </ul>
  )
}