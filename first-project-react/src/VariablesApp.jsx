import React from 'react'

export const VariablesApp = () => {
  const handleKeyUp = (event) =>{
    // console.log(event)
    // console.log(event.key)
    if (event.shiftKey){
      console.log(event.key)
      console.log('la tecla shift está presionada en', {event})
    }else{
      console.log('no estás presionando shift')
    }
  }
  return (
    <>
        <input type="text" onKeyUp={handleKeyUp} placeholder='presiona una tecla' />
    </>
  )
}

