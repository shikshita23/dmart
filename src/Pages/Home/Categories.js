import Card from "../Home/Card";
import pic1 from "../../assets/carousel1.png";
import pic2 from "../../assets/carousel2.png";
import pic3 from "../../assets/carousel3.png";
import "../../Css/category.css";

function Categories() {
  return (
    <div className="category row row-cols-4 ">
      <Card
        className="col"
        imgsrc={pic1}
        imgAlt="this is pic1"
        title="PICTURE 1"
      ></Card>
      <Card
        className="col"
        imgsrc={pic2}
        imgAlt="this is pic2"
        title="PICTURE 2"
      ></Card>
      <Card
        className="col"
        imgsrc={pic3}
        imgAlt="this is pic3"
        title="PICTURE 3"
      ></Card>
      <Card
        className="col"
        imgsrc={pic2}
        imgAlt="this is pic2"
        title="PICTURE 4"
      ></Card>
      <Card
        className="col"
        imgsrc={pic1}
        imgAlt="this is pic1"
        title="PICTURE 5"
      ></Card>
      <Card
        className="col"
        imgsrc={pic2}
        imgAlt="this is pic2"
        title="PICTURE 6"
      ></Card>
      <Card
        className="col"
        imgsrc={pic3}
        imgAlt="this is pic3"
        title="PICTURE 7"
      ></Card>
      <Card
        className="col"
        imgsrc={pic2}
        imgAlt="this is pic2"
        title="PICTURE 8"
      ></Card>
      <Card
        className="col"
        imgsrc={pic1}
        imgAlt="this is pic1"
        title="PICTURE 9"
      ></Card>
      <Card
        className="col"
        imgsrc={pic2}
        imgAlt="this is pic2"
        title="PICTURE 10"
      ></Card>
      <Card
        className="col"
        imgsrc={pic3}
        imgAlt="this is pic3"
        title="PICTURE 11"
      ></Card>
      <Card
        className="col"
        imgsrc={pic2}
        imgAlt="this is pic2"
        title="PICTURE 12"
      ></Card>
    </div>
  );
}
export default Categories;
