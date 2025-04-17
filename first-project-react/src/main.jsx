import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { VariablesApp } from './VariablesApp'
import './style.css'


createRoot(document.getElementById('root')).render( // se conecta con la app y el componente  si no está la aclaración se usarán las DEFAULT
  <StrictMode>
    <VariablesApp titulo='este es un titulo' subtitulo='este es un subtitulo' num={999}/>
  </StrictMode>,
)
