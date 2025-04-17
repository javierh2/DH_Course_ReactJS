import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { VariablesApp } from './VariablesApp'
import './style.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VariablesApp />
  </StrictMode>,
)
