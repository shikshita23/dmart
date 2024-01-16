import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
const options = {
  method: "GET",
  url: "https://real-time-product-search.p.rapidapi.com/search",
  params: {
    q: "Nike shoes",
    country: "us",
    language: "en",
  },
  headers: {
    "X-RapidAPI-Key": "e558d17624msh9e00a103b5492f3p139371jsn907d8b02b707",
    "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
  },
};
export default function ProductList() {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        const datas = response?.data;
        setProductData(datas.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div
        className="row row-cols-5"
        style={{
          gap: "15px",
          marginTop: "100px",
          marginLeft: "13px",
          width: "100%",
        }}
      >
        <label for="sorting" style={{ marginLeft: "auto", width: "60px" }}>
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
            marginRight: "78px",
          }}
        >
          <option value="BestSelelr">Best Seller</option>
          <option value="topMatch">Top Match</option>
          <option value="ascendingPrice">Price low to high</option>
          <option value="descendingPrice">Price high to low</option>
        </select>
        {productData.map((item, index) => (
          <ProductCard
            key={index}
            name={item.product_title}
            photo={item.product_photos[0]}
            rating={item.product_rating}
            price={item.offer.price}
          />
        ))}
      </div>
    </>
  );
}
