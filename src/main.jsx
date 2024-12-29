import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ScrollContextProvider } from './context/ScrollAnimation.jsx'
import { UserProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <ScrollContextProvider>
    <App />
    </ScrollContextProvider>
    </UserProvider>
  </StrictMode>,
)
