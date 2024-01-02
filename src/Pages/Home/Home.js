import pic1 from "../../assets/carousel1.png";
import pic2 from "../../assets/carousel2.png";
import pic3 from "../../assets/carousel3.png";
import Title from "../Home/Title";
import BestSellerCollection from "../Home/BestSeller";
import Categories from "../Home/Categories";
import ImageSlider from "../Home/ImageSlider";
import ForYou from "../Home/ForYou";
const IMAGES = [pic1, pic2, pic3];
export default function Home(){
    return(
        
        <div style={{ maxWidth: "1700px", width: "100%" }}>
        <ImageSlider imageUrls={IMAGES}></ImageSlider>
        <Title></Title>
        <Categories></Categories>
        <BestSellerCollection></BestSellerCollection>
        <ForYou></ForYou>
        </div>
       
    )
}