import React, { useContext } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { CategoryData } from "./Accordion";
import "../../Css/MyAccordion.css";
export default function MyAccordion({ qn, ans, category }) {
  const [show, setShow] = useState(false);
  const valueOfCategory = useContext(CategoryData);
  const CatgoryName = valueOfCategory.Data.mainCol;
  return (
    <>
      {category === CatgoryName ? (
        <div className="mainHeading">
          <div className=" d-flex" onClick={() => setShow(!show)} style={{cursor:'pointer'}}>
            <div className="FQ"  >{qn}</div>
            {show === false ? (
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{
                  marginLeft: "auto",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronUp}
                style={{
                  marginLeft: "auto",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
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
