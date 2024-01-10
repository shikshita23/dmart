import "../Home/BestSeller";
import pic1 from "../../assets/carousel1.png";
import pic2 from "../../assets/carousel2.png";
import pic3 from "../../assets/carousel3.png";
import ProductsSlider from "../Home/ProductsSlider";
const forYouImages = [
  {
    image: pic1,
    title: "picture 111",
    price: "Rs.1000",
  },
  {
    image: pic2,
    title: "picture 222",
    price: "Rs.1800",
  },
  {
    image: pic3,
    title: "picture 333",
    price: "Rs..5120",
  },
  {
    image: pic2,
    title: "picture 444",
    price: "Rs.40",
  },
  {
    image: pic3,
    title: "picture 555",
    price: "Rs.444",
  },
  {
    image: pic1,
    title: "picture 666",
    price: "Rs.205",
  },
  {
    image: pic3,
    title: "picture 777",
    price: "Rs.100",
  },
  {
    image: pic1,
    title: "picture 888",
    price: "Rs.720",
  },
];
function ForYou() {
  return (
    <div className="forYou" style={{paddingBottom:'15px', paddingTop:'30px', backgroundColor:'white', marginBottom:'70px', width:'1350px', marginLeft:'auto',marginRight:'auto'}}>
      <ProductsSlider products={forYouImages} title="For You"></ProductsSlider>
    </div>
  );
}
export default ForYou;
