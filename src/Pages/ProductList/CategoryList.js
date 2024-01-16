import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import CategorySideBar from "../CatagoryList/CategorySideBar";
import ProductList from "./ProductList";

export default function CategoryList() {
  return (
    <>
      <Navbar></Navbar>
      <div className="row " style={{ width: "100%" }}>
        <div className="col-3">
          <CategorySideBar></CategorySideBar>
        </div>
        <div className="col-9">
          <ProductList></ProductList>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
