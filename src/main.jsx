import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { StorageContextGlobal } from './Context/ContextGlobal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StorageContextGlobal>
      <App />
    </StorageContextGlobal>
  </StrictMode>,
)
