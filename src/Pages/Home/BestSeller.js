import "../../Css/BestSeller.css";
import pic1 from "../../assets/carousel1.png";
import pic2 from "../../assets/carousel2.png";
import pic3 from "../../assets/carousel3.png";
import ProductsSlider from "../Home/ProductsSlider";
const bestSellerImages = [
  {
    image: pic1,
    title: "picture 11",
    price: "Rs..720",
  },
  {
    image: pic2,
    title: "picture 22",
    price: "Rs.800",
  },
  {
    image: pic3,
    title: "picture 33",
    price: "Rs..520",
  },
  {
    image: pic2,
    title: "picture 44",
    price: "Rs.400",
  },
  {
    image: pic1,
    title: "picture 55",
    price: "Rs.20",
  },
  {
    image: pic3,
    title: "picture 66",
    price: "Rs.1900",
  },
  {
    image: pic1,
    title: "picture 77",
    price: "Rs.72",
  },
  {
    image: pic3,
    title: "picture 88",
    price: "Rs.44",
  },
];
function BestSellerCollection() {
  return (
    <div className="bestSeller" style={{paddingBottom:'15px', paddingTop:'30px', backgroundColor:'white', marginBottom:'70px',width:'1350px',marginLeft:'auto',marginRight:'auto'}}>
      <ProductsSlider
        products={bestSellerImages}
        title="best Seller"
      ></ProductsSlider>
    </div>
  );
}
export default BestSellerCollection;
