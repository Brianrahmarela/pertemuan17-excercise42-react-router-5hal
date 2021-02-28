import { Link } from 'react-router-dom';
import '../App.css';


function Navbar() {
  return (
    <div className="container-nav"style={{ display: "flex", justifyContent: "center"}}>
      <div id="nav">
        <Link to="/">Home </Link>
        <Link to="/profilex/paramdrapps">Profile </Link>
        <Link to="/gallery">Gallery </Link>
        <Link to="/register">Register </Link>
        <Link to="/login">Login </Link>
      </div>
    </div>
  )
}

export default Navbar
 