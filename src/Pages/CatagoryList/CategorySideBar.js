import { categoryDetails } from "./CategoryApi";
import { useState } from "react";
import '../../Css/CategorySideBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faList,
  } from "@fortawesome/free-solid-svg-icons";
export default function CategorySideBar(){
    const [details, setDetails] = useState(categoryDetails);
    return(
        <div className="CategorySideBar">
            <div className="categorySideBarTitle"><FontAwesomeIcon icon={faList} style={{color: "#F28C28", marginRight:'10px' }} />Category</div>
            <div className="categorySideBarList">
                {details.map((category,index)=>(
                      <div key={index} className="categoryItem pt-3">
                      {category.title}
                  </div>
                )) }
            </div>
        </div>
    )
}