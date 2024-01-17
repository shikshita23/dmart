import Card from "../Home/Card";
import "../../Css/category.css";
import { useState } from "react";
import { categoryDetails } from "./CategoryApi";

function Categories() {
  const [category,setCategory]=useState(categoryDetails)
  return (
    <div className="category row row-cols-4 ">
      {console.log("categoryUseState==>",category)}
      {category.map((items,i)=>{
        return <Card key={i} {...items}></Card>
      })}
    </div>
  );
}
export default Categories;