import { Link } from "react-router-dom"
import './NBStyle.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="pagename"><Link to="/">MemoryStorage</Link></li>
        <li><Link to="/"><h2>Home</h2></Link></li>
        <li><Link to="/album"><h2>Album</h2></Link></li>
        <li><Link to="/product"><h2>Product</h2></Link></li>
      </ul>
    </nav>
  )
}