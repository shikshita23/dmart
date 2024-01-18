import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { productDetails } from "./ProductApi";
import { Link } from "react-router-dom";
// const options = {
//   method: "GET",
//   url: "https://real-time-product-search.p.rapidapi.com/search",
//   params: {
//     q: "Nike shoes",
//     country: "us",
//     language: "en",
//   },
//   headers: {
//     "X-RapidAPI-Key": "e558d17624msh9e00a103b5492f3p139371jsn907d8b02b707",
//     "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
//   },
// };
export default function ProductList() {
//   const [productData, setProductData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.request(options);
//         const datas = response?.data;
//         setProductData(datas.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);
const[product,setProduct]=useState(productDetails)
  return (
    <>
    <div className="d-flex mt-5">

        <label for="sorting" style={{ width: "60px",marginLeft:'auto' }}>
          Sort :
        </label>
        <select
          name="sort"
          id="sort"
          style={{
            borderRadius: "40px",
            height: "38px ",
            width: "200px",
            paddingLeft: "10px",
            paddingRight: "10px",
            backgroundColor: "#F28C28",
            color: "#353935",
            border: "none",
            marginRight: "60px",
          }}
        >
          <option value="BestSelelr">Best Seller</option>
          <option value="ascendingPrice">Price low to high</option>
          <option value="descendingPrice">Price high to low</option>
        </select>
    </div>
      <div
        className="row row-cols-4 productBox"
        style={{
          marginTop: "53px",
          marginLeft: "13px",
          // backgroundColor:'#f8f8f8'
        }} >
            {product.map((item, index) => (
              <Link to={`/ProductDetail/${item.title}`}>
              <ProductCard
                key={index} {...item}
              />
              </Link>
            ))}
      </div>
    </>
  );
}
