import pic1 from "../../assets/sale1.png";
import pic2 from "../../assets/sale2.png";
import pic3 from "../../assets/sale3.png";
import Title from "../Home/Title";
import BestSellerCollection from "../Home/BestSeller";
import Categories from "../CatagoryList/Categories";
import ImageSlider from "../Home/ImageSlider";
import ForYou from "../Home/ForYou";
const IMAGES = [pic1, pic2, pic3];
export default function Home() {
  return (
    <div style={{ maxWidth: "1700px", width: "100%" }}>
      <ImageSlider imageUrls={IMAGES}></ImageSlider>
      <Title></Title>
      <Categories></Categories>
      <BestSellerCollection></BestSellerCollection>
      <ForYou></ForYou>
    </div>
  );
}
