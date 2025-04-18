import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContadorApp } from './ContadorApp'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContadorApp init={0}/>
  </StrictMode>,
)
