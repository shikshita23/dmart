import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import pic1 from "../../assets/carousel1.png";
import "../../Css/CartDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function CartDetails() {
  const [qty1, setQty1] = useState(1);
  const [qty2, setQty2] = useState(1);
  return (
    <>
      <Navbar></Navbar>
      <div className="cart">
        <div className="cartTitle">Items In the Cart</div>
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <div className="CartDetails ">
            <div className=" row d-flex align-items-center">
              <div className="selectProduct col-1  d-flex  align-items-center justify-content-center">
                <input
                  type="checkbox"
                  name="selectedProduct"
                  id="selectedProduct"
                ></input>
              </div>
              <div className="col-2">
                <img src={pic1} alt="first item" />
              </div>
              <div className="col-2 CartProductTitle ms-2 text-break">
                picturedafnkjsdfkjsdfkdsjhfkdsjfhkjsdhfkdskfhdskfhsdk1
              </div>
              <div className="col-2 CartProductPrice  ">Rs.1000 </div>
              <div className="col-2 cartProductQuantity d-flex">
                <div
                  onClick={() => setQty1(qty1 - 1)}
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
                Qty:{qty1}
                <div
                  style={{ width: "20px", cursor: "pointer" }}
                  onClick={() => setQty1(qty1 + 1)}
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
              >
                <FontAwesomeIcon icon={faTrash} style={{ color: "#F28C28" }} />
              </div>
            </div>
            <div className=" row d-flex align-items-center">
              <div className="selectProduct col-1 d-flex justify-content-center align-items-center">
                <input
                  type="checkbox"
                  name="selectedProduct"
                  id="selectedProduct"
                ></input>
              </div>
              <div className="col-2">
                <img src={pic1} alt="first item" />
              </div>
              <div className="col-2 CartProductTitle ms-2 text-break">
                picture1
              </div>
              <div className="col-2 CartProductPrice  ">Rs.1000 </div>
              <div className="col-2 cartProductQuantity d-flex">
                <div
                  onClick={() => setQty2(qty2 - 1)}
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
                Qty:{qty2}
                <div
                  style={{ width: "20px", cursor: "pointer" }}
                  onClick={() => setQty2(qty2 + 1)}
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
              >
                <FontAwesomeIcon icon={faTrash} style={{ color: "#F28C28" }} />
              </div>
            </div>
          </div>
          <div className=" orderSummaryColumn">
            <div className="orderSummaryCart">
              <div className="orderSummaryCartTitle">Order Summary</div>
              <div className="cartProductDetails mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <div>Subtotal:</div>
                  <div>Rs.800</div>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <div>Shipping Fee:</div>
                  <div>Rs.150</div>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <div>Discount:</div>
                  <div>Rs.0</div>
                </div>
                <div className="cartDivider my-3"></div>
                <div className="d-flex justify-content-between mb-2">
                  <div>Total:</div>
                  <div>Rs.0</div>
                </div>
              </div>
              <Link to="/Checkout" style={{textDecoration:'none'}}>
                <button className="cartCheckout">Proceed CheckOut</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
