import { Facebook, Instagram, Twitter } from "lucide-react";
import "../Css/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        <ul className="ps-0">
          <li className="font-weight-bold">About Us</li>
          <li className="mt-3">
            <a href="#">About D-mart</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
          <li>
            <a href="#">News </a>
          </li>
          <li>
            <a href="#">Investors Policies </a>
          </li>
        </ul>
        <ul>
          <li className="font-weight-bold">Get Help</li>
          <li className="mt-3">
            <a href="#">Order Status</a>
          </li>
          <li>
            <a href="#">Return</a>
          </li>
          <li>
            <a href="#">Shipping and Delivery</a>
          </li>
          <li>
            <a href="#">Payment Options</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <ul className="pe-0 ps-0 lastUl">
          <li className="font-weight-bold">Stay Connected</li>
          <li className="mt-3">
            <a href="#">Dmart Blogs</a>
          </li>
          <li>
            <Facebook size={18} />
            <a href="#">Facebook</a>
          </li>
          <li>
            <Instagram size={18} />
            <a href="#">Instagram</a>
          </li>
          <li>
            <Twitter size={18} />
            <a href="#">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
