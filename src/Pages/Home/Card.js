import "../../Css/Card.css";
import { ArrowRight } from "lucide-react";
function Card(props) {
  return (
    <div className="Cards">
      <div className="cardTitle">{props.title}</div>
      <div className="cardImage">
        <img src={props.imgsrc} alt={props.alt}></img>
      </div>
      <div className="shop">
        <div className="mr-2">Shop Now</div>
        <ArrowRight size={20} strokeWidth={1.5} />
      </div>
    </div>
  );
}
export default Card;
