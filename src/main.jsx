import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Renderiza la aplicación en el elemento con id 'root'
// Utiliza React.StrictMode para activar advertencias adicionales en el desarrollo  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
