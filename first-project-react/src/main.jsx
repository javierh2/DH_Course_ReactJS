import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ListApp } from './ListApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListApp cantidad={5}/>
  </StrictMode>,
)
