import { Link } from "react-router-dom"
import './NBStyle.css'
import AuthContext from "../../hook/useContext/authContext"
import { useContext } from "react"
import LogoutButton from '../LogoutButton/LogoutButton'

export default function Navbar() {
  const {auth} = useContext(AuthContext);
  const MenuSelector = () => {
    if(auth.UserName) {
      return (
        <ul>
          <li><Link to="/album"><h2>Album</h2></Link></li>
          <li><Link to="/product"><h2>Product</h2></Link></li>
          <li><LogoutButton/></li>
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