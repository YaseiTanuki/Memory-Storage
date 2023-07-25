import { Link } from "react-router-dom"
import './NavBarStyle.css'
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/album">Album</Link></li>
        <li><Link to="/product">Product</Link></li>
      </ul>
    </nav>
  )
}