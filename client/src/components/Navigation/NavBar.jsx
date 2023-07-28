import { Link } from "react-router-dom"
import './NBStyle.css'
import { LoginContext } from "../../App"
import { useContext } from "react"

export default function Navbar() {
  const {state, dispatchMethod} = useContext(LoginContext);
  const MenuSelector = () => {
    if(state) {
      return (
        <ul>
          <li><Link to="/album"><h2>Album</h2></Link></li>
          <li><Link to="/product"><h2>Product</h2></Link></li>
        </ul>
      )
    } else {
      return (
        <ul>
          <li><Link to="/"><h2>Lobby</h2></Link></li>
        </ul>
      )
    }
  }

  return (
    <nav className="navbar">
      <ul>
        <li className="pagename"><Link to="/">MemoryStorage</Link></li>
      </ul>
      <MenuSelector/>
    </nav>
  )
}