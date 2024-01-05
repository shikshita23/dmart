import React, { useContext } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { CategoryData } from "./Accordion";
import '../../Css/MyAccordion.css'
export default function MyAccordion({ qn, ans, category,}) {
  const [show, setShow] = useState(false);
  const valueOfCategory=useContext(CategoryData);
  const CatgoryName=valueOfCategory.Data.mainCol
  return (
    <>
        {console.log("PROPS from myaccordion==>",valueOfCategory.Data.mainCol)}
        {console.log("CategoryNAme ==>",CatgoryName)}
      {category === CatgoryName? (
        <div className="mainHeading">
          <div className=" d-flex">
            <div className="FQ">{qn}</div>
            {show === false ? (
              <FontAwesomeIcon
                onClick={() => setShow(!show)}
                icon={faChevronDown}
                style={{marginLeft:'auto', marginTop:'auto', marginBottom:'auto', cursor:'pointer'} }
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => setShow(!show)}
                icon={faChevronUp}
                style={{marginLeft:'auto', marginTop:'auto', marginBottom:'auto', cursor:'pointer'} }
              />
            )}
          </div>
          {show === true ? <div className="FA">{ans}</div> : <div></div>}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
