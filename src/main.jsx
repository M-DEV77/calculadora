import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Global from "../src/assets/components/styles/global.jsx"
import App from './assets/App.jsx'
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Global/>
    <App />
  </StrictMode>,
)
