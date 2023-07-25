import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Navigation/NavBar.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <>
      <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </div>
    </>
  )
}

export default App
