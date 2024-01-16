import "../../Css/ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function ProductCard(props) {
  return (
    <div className="col productCard">
      <div className="">
        <div className="productImage">
          <img src={props.photo} alt="product" />
        </div>
        <div className="productTitleName mt-3">{props.name}</div>
        <div className="productRating">
          {props.rating}
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#FFD43B", marginLeft: "10px" }}
          />
        </div>
        <div className="productPriceRate">{props.price}</div>
      </div>
    </div>
  );
}
