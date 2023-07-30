import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './hooks/useContext/authContext.jsx'
import { AlbumProvider } from './hooks/useContext/albumContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AlbumProvider>
          <App />
        </AlbumProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
