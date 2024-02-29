import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import  './Navbar.css';


const Navbar = () => {

    const [menuOpen , setMenuOpen ] = useState(false)


  return (
 <nav>
    <Link to={"/"} className="title">
        MED RADAR
        </Link>
        <div 
        className="menu" 
        onClick={()=> {
            setMenuOpen(!menuOpen);
        }}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    <ul className={menuOpen ? "open" : ""}>
       
        <li>
            <Link to={"/apply-treatments"}>ApplyTreatments</Link>
        </li>
        <li>
            <Link to={"/apply-doctor"}>ApplyDoctor</Link>
        </li>
        <li>
            <Link to={"/profile"}>Profile</Link>
        </li>
        <li>
            <Link to={"logout"}>Logout</Link>
        </li> 
    </ul>
</nav>
  );
};

export default Navbar;

