/*BEGIN IMPORT*/
//node_modules
import { Route, Routes } from 'react-router-dom'

//css
import './App.css'

//components
import NavBar from './components/Navigation/NavBar.jsx'
import RegForm from './components/RegisterFrom/RegForm'
import LoginForm from './components/LoginForm/LoginForm'

//pages
import Lobby from './pages/lobby/Lobby'
import Home from './pages/home/Home'
import Product from './pages/products/Products.jsx'
import Album from './pages/album/Album'

/*END IMPORT*/

function App() {
  return (
    <>
      <NavBar />
          <div>
            <Routes>
              <Route path="/" element={<Lobby/>}/>
              <Route path="/register" element={<RegForm/>}/>
              <Route path="/login" element={<LoginForm/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path="/album" element={<Album/>}/>
              <Route path="/product" element={<Product />}/>
            </Routes>
          </div>
    </>

  )
}

export default App
