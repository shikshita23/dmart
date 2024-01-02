import '../Css/Navbar.css';
import '../Pages/Login/SellerAccount';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import logo from '../assets/logo1new.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faMagnifyingGlass
  } from "@fortawesome/free-solid-svg-icons";
function Navbar(){
    const months = [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const weeks = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const d = new Date();
      console.log(d)
    return(
        <nav>
        <div className='d-flex flex-column navbarHero'>
            <div className='d-flex navbarTop'>
            <div className="navbarTopContent mr-auto d-flex justify-content-between">
                <Link to="/SellerAccount">Become a Seller</Link>
                <a href='#'>Help and support</a>
            </div>
            <div className="date">
                {weeks[d.getDay()] +
                  ", " +
                  d.getDate() +
                  " " +
                  months[d.getMonth()]}
              </div>
        
            </div>
            
            <div className='d-flex flex-column navbar'>
                <div className='mr-auto'>
                    <img className='logo'
                        src={logo}
                        alt="logo of website" 
                    />
                </div >
                <div className='searchBar'>
                        <input
                            type='text'
                            className='searchForItem'
                            placeholder='Search D-Mart'
                        />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='searchIcon'/>
                </div>
                <div className='ml-auto mt-auto mb-auto d-flex'>
                    <div className='navHeroContent ml-auto d-flex '>
                        <Link to="/Login">Login</Link>
                        <div className='divider'></div>
                        <Link to="/SignUp">Sign Up</Link>
                    </div>
                    <div className='cartIcon'>
                        <FontAwesomeIcon icon={faCartShopping} size='xl'/>
                    </div>
                </div>
            </div>
        </div>
        </nav>
    );
}
export default Navbar;