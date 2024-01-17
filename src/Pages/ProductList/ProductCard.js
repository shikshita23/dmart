import "../../Css/ProductCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function ProductCard({imgsrc,title,imgAlt,rating,price}) {
  return (
    <div className=" productCard col">
      <div style={{width:'190px',marginLeft:'auto',marginRight:'auto'}} className="productContent">
        
          <img src={imgsrc} alt={imgAlt} style={{marginTop:'5px'}}/>
        

        <div className="productTitleName mt-3 fw-bold">{title}</div>
        <div className="d-flex justify-content-between ">
          <div>
        <div className="productPriceRate">Rs. {price}</div>
        <div className="productRating">
          {rating}
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#FFD43B", marginLeft: "10px" }}
          />
          </div>
        </div>
      <div className="cartIconProduct me-2 mt-3">
              <Link to='/CartDetails'>
                  <FontAwesomeIcon icon={faCartShopping} size="xl" style={{color:'#F28C28'}}/>
              </Link>
            </div>
      </div>
        </div>
    </div>
  );
}
