import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  <StrictMode>

  <BrowserRouter>
  <ToastContainer
    theme='drak'
    position='top-center'
    autoClose={3000}
    closeOnClick
    pauseOnHover={false}
  />
    <App />
    
  </BrowserRouter>
  </StrictMode>
  
)
