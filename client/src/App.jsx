import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Navigation/NavBar.jsx'
import Home from './pages/home/Home.jsx'
import Product from './pages/products/Products.jsx'
import Album from './pages/album/Album'

function App() {
  return (
    <>
      <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/album" element={<Album/>}/>
            <Route path="/product" element={<Product />}/>
          </Routes>
        </div>
    </>
  )
}

export default App
