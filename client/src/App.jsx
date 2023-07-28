/*BEGIN IMPORT*/
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Navigation/NavBar.jsx'
import Lobby from './pages/lobby/Lobby'
import Product from './pages/products/Products.jsx'
import Album from './pages/album/Album'
import RegForm from './components/RegisterFrom/RegForm'
import LoginForm from './components/LoginForm/LoginForm'
import { createContext, useContext, useReducer } from 'react'
import { init, reducer } from './hook/useReducer/LoginReducer'
/*END IMPORT*/

export const LoginContext = createContext();

function App() {
  const [state, dispatchMethod] = useReducer(reducer, init)
  return (
    <>
      <LoginContext.Provider value={{state, dispatchMethod}}>
        <NavBar />
            <div>
              <Routes>
                <Route path="/" element={<Lobby/>}/>
                <Route path="/register" element={<RegForm/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/album" element={<Album/>}/>
                <Route path="/product" element={<Product />}/>
              </Routes>
            </div>
        </LoginContext.Provider>
    </>

  )
}

export default App
