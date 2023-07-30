import { Link } from "react-router-dom"
import './NBStyle.css'
import AuthContext from "../../hooks/useContext/authContext"
import { useContext } from "react"
import Profile from "../Profile/Profile"
import Popup from "reactjs-popup"

export default function Navbar() {
  const {auth} = useContext(AuthContext);
  const MenuSelector = () => {
    if(auth.UserName) {
      return (
        <div className="NavContainer">
          <ul>
            <li><Link to="/album"><h2>Album</h2></Link></li>
            <li><Link to="/product"><h2>Product</h2></Link></li>
          </ul>
          <Popup trigger={<img className="userIcon" src="/img/userIcon.png"/>}>
            <Profile/>
          </Popup>
        </div>
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