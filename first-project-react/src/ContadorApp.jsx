import { useState } from 'react'

export const ContadorApp = ({init}) => {
    const [counter, setCounter] = useState(init)

    // const handleClick = () =>{
    //     const num = counter + 1
    //     setCounter(num)
    // }
  return (
    <>
        <p>el contador es : {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Agregar uno</button>
    </>
  )
}
