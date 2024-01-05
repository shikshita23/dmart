import React from "react";
import { useState } from "react";
import { questions } from "./HelpApi";
import MyAccordion from "./MyAccordion";
import "../../Css/Accordion.css";
import { createContext } from "react";
const CategoryData = createContext();
const Accordion = (Data) => {
  const [data, setData] = useState(questions);
  return (
    <>
      <CategoryData.Provider value={Data}>
        <section className="mainDiv">
          <div className="accordionTitle">Frequently Asked Questions:</div>
          {data.map((curElem, i) => {
            return <MyAccordion key={i} {...curElem}></MyAccordion>;
          })}
        </section>
      </CategoryData.Provider>
    </>
  );
};

export default Accordion;
export { CategoryData };
