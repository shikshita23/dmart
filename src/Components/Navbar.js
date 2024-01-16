import "../Css/Navbar.css";
import "../Pages/Login/SellerAccount";
import { Link } from "react-router-dom";
import logo from "../assets/logo1new.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
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
  return (
    <nav>
      <div className="d-flex flex-column navbarHero">
        <div className="d-flex navbarTop">
          <div className="navbarTopContent mr-auto d-flex justify-content-between">
            <Link to="/SellerAccount" style={{textDecoration:'none', fontWeight:'600'}}>Become a Seller</Link>
            <Link to="/Help" style={{textDecoration:'none', fontWeight:'600'}}>Help and support</Link>
          </div>
          <div className="date">
            {weeks[d.getDay()] +
              ", " +
              d.getDate() +
              " " +
              months[d.getMonth()]}
          </div>
        </div>

        <div className="d-flex flex-column navbar">
          <div className="me-auto">
            <Link to="/">
              <img className="logo" src={logo} alt="logo of website" />
            </Link>
          </div>
          <div className="searchBar">
            <input
              type="text"
              className="searchForItem"
              placeholder="Search D-Mart"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
          </div>
          <div className="ml-auto mt-auto mb-auto d-flex ms-auto">
            <div className="navHeroContent ml-auto d-flex ">
              <Link to="/Login" style={{textDecoration:'none', fontWeight:'600'}}>Login</Link>
              <div className="divider"></div>
              <Link to="/SignUp" style={{textDecoration:'none', fontWeight:'600'}}>Sign Up</Link>
            </div>
            <div className="cartIcon">
              <Link to='/CartDetails'>
                  <FontAwesomeIcon icon={faCartShopping} size="xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
