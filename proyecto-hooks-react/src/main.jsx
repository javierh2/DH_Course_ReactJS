import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HookApp } from './HookApp'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HookApp/>
  </StrictMode>,
)
