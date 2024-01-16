import "../../Css/Card.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
function Card({imgsrc,title,imgAlt}) {
  return (
    <div className="Cards">
      <div className="cardTitle">{title}</div>
      <Link to={`/ProductList/${title}`}>
      <div  style={{cursor:'pointer'}}>
      <div className="cardImage">
        <img className="CardImg" src={imgsrc} alt={imgAlt}></img>
      </div>
      <div className="shop">
        <div className="mr-2 mt-2 font-weight-bold" >Shop Now</div>
        <ArrowRight size={20} strokeWidth={1.5} className="mt-2" />
      </div>
      </div>
    </Link>
    </div>
  );
}
export default Card;
