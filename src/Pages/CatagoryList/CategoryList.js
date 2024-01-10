import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import CategorySideBar from "./CategorySideBar";

export default function CategoryList(){
    return(
        <>
            <Navbar></Navbar>
            <CategorySideBar></CategorySideBar>
            <Footer></Footer>
        </>
    )
}