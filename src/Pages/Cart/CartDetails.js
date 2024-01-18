import "../../Css/CartDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function CartDetails({ imgsrc, imgAlt, title, price, qty, id }) {
  const [quantity, setQuantity] = useState(qty);
  const [checked, setChecked] = useState(false);

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };
  // const deleteItem=(i)=>{
  //   const deleted = cartItemss.filter((items, index) => {
  //     return i !== index;
  //   });
  //   setCartItemss(deleted);
  // }
  const handleChecked = () => {
    setChecked(!checked);
  };
  const subTotal = () => {
    return price * quantity;
  };
  const renderTotal = () => {
    if (checked) {
      return subTotal();
    } else {
      return 0;
    }
  };
  console.log(renderTotal());
  return (
    <>
      <div>
        <div className=" row d-flex align-items-center mb-3">
          {/* <div className="selectProduct col-1  d-flex  align-items-center justify-content-center">
                <input
                  type="checkbox"
                  name="selectedProduct"
                  id="selectedProduct"
                  onChange={handleChecked}
                ></input>
              </div> */}
          <div className="col-3 d-flex  align-items-center justify-content-center">
            <img
              src={imgsrc}
              alt={imgAlt}
              style={{ width: "125px", left: "100px" }}
            />
          </div>
          <div className="col-2 CartProductTitle ms-2 text-break">{title}</div>
          <div className="col-2 CartProductPrice  ">Rs.{price} </div>
          <div className="col-2 cartProductQuantity d-flex">
            <div
              onClick={() => handleQuantityChange(-1)}
              style={{
                width: "20px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              <FontAwesomeIcon
                icon={faMinus}
                style={{
                  color: "#F28C28",
                }}
              />
            </div>
            Qty:{quantity}
            <div
              style={{ width: "20px", cursor: "pointer" }}
              onClick={() => handleQuantityChange(1)}
            >
              <FontAwesomeIcon
                icon={faPlus}
                style={{
                  color: "#F28C28",
                  marginLeft: "10px",
                }}
              />
            </div>
          </div>
          <div
            className="col-1 cartProductDelete"
            style={{ cursor: "pointer" }}
            // onClick={()=>deleteItem()}
          >
            <FontAwesomeIcon icon={faTrash} style={{ color: "#F28C28" }} />
          </div>
        </div>
      
      </div>
      
    </>
  );
}
