/*BEGIN IMPORT*/
//node_modules
import { Route, Routes } from 'react-router-dom'
import { useContext, useEffect } from 'react'
//css
import './App.css'

//components
import NavBar from './components/Navigation/NavBar.jsx'
import RegForm from './components/RegisterForm/RegForm'
import LoginForm from './components/LoginForm/LoginForm'
import RoutesAuth from './components/RoutesAuth/RoutesAuth'
import ChangePasswdForm from './components/ChangePasswdForm/ChangePasswdForm'
//pages
import Lobby from './pages/lobby/Lobby'
import Home from './pages/home/Home'
import Product from './pages/products/Products.jsx'
import Album from './pages/album/Album'

//Hooks
import AuthContext from './hooks/useContext/authContext'
import { AlbumProvider } from './hooks/useContext/albumContext.jsx'
import { ProductProvider } from './hooks/useContext/productContext'
/*END IMPORT*/

function App() {
  const {auth} = useContext(AuthContext)

  return (
    <>
      <NavBar />
          <div>
            <Routes>
              {/*PUBLIC ROUTES*/}
              <Route path="/" element={<Lobby/>}/>
              <Route path="/register" element={<RegForm/>}/>
              <Route path="/login" element={<LoginForm/>}/>

              {/*REQUIRE AUTHORIZATION*/}
              <Route element={<RoutesAuth/>}>
              <Route path='/home' element={<Home/>}/>
                <Route path="/album" element={
                  <AlbumProvider>
                    <Album/>
                  </AlbumProvider>}/>
                <Route path="/product" element={
                  <ProductProvider>
                    <Product />
                  </ProductProvider>}/>
                </Route>
                <Route path="/changepassword" element={<ChangePasswdForm/>}/>
            </Routes>
          </div>
    </>

  )
}

export default App
