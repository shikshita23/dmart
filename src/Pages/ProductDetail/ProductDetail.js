import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPlus,
  faMinus,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "../../Css/productDetailPage.css";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import pic1 from "../../assets/electronics.png";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <Navbar />
      <div className="productdetailBox row">
        <div className="col-9 d-flex">
          <div>
            <img
              src={pic1}
              alt="Product"
              style={{ width: "330px", height: "439px" }}
            />
          </div>
          <div className="ms-5 descriptionList">
            <div className="productTitleName fw-bold mb-1">
              Electronics dfhsj
            </div>
            <div className="rating">
              4.5
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#FFD43B", marginLeft: "7px" }}
              />
            </div>
            <div className="horizonDivider"></div>
            <div className="Price">Rs.1500</div>
            <div className="quantityCount d-flex">
              <div
                onClick={decreaseQuantity}
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
              Qty: {quantity}
              <div
                style={{ width: "20px", cursor: "pointer" }}
                onClick={increaseQuantity}
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
            <div className="horizonDivider"></div>
            <div className="descr">
              <div className="d-flex justify-content-between">
                <div className="descrTitle">Material</div>
                <div className="descrAbout">Almunium</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="descrTitle">Color</div>
                <div className="descrAbout">Black</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="descrTitle">Brand</div>
                <div className="descrAbout">No Brand</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="descrTitle">Size</div>
                <div className="descrAbout">sm</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="descrTitle">Item Weight</div>
                <div className="descrAbout">1kg</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="descrTitle">Number Of pieces</div>
                <div className="descrAbout">1</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="descrTitle">Warranty Description</div>
                <div className="descrAbout">No Warranty</div>
              </div>
            </div>
            <div className="buttons">
              <button>Buy Now</button>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="col-2" style={{ width: "325px" }}>
          <div>
            <div className="deliveryTitle fw-bold me-3">Delivery</div>
            <div className="d-flex">
              <FontAwesomeIcon icon={faLocationDot} className="me-2 pt-2" />
              Koteshwor,kathmandu fnskdj dskjfb dskjf skjfb
              <div
                style={{
                  marginLeft: "auto",
                  cursor: "pointer",
                  display: "flex",
                  textAlign: "end",
                }}
              >
                Change
              </div>
            </div>
            <div className="d-flex ">
                <div >
                      Delivery Cost
                </div>
              <div
                style={{
                  marginLeft: "auto",
                  cursor: "pointer",
                  display: "flex",
                  textAlign: "end",
                }}
              >
                Rs.65
              </div>
            </div>
          </div>
          <div className="horizonDivider"></div>
          <div className="paymentMethodAvailable">
            <div className="fw-bold">Payment Method Available</div>
            <div className="d-flex justify-content-between">
              <div>cash On Delivery</div>
              <div>esewa</div>
            </div>
          </div>
          <div className="horizonDivider"></div>
          <div className="shopInfo">
            <div className="fw-bold mb-1">Shop Details</div>
            <div className="d-flex justify-content-between mt-4">
              <div className="shopName">abc shop</div>
              <div className="chatbox" style={{ cursor: "pointer" }}>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.4 21.86 5.4 21.32V19.87C4.38 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19 5 9.02C5.13 9.01 5.26 9 5.4 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z"
                      fill="#2abbe8"
                    ></path>{" "}
                    <path
                      d="M17.75 15.6C19.02 15.6 20.09 15.18 20.83 14.43C21.58 13.69 22 12.62 22 11.35V6.25C22 3.9 20.1 2 17.75 2H9.25C6.9 2 5 3.9 5 6.25V7C5 7.28 5.22 7.5 5.5 7.5H12.19C14.9 7.5 17.09 9.69 17.09 12.4V15.1C17.09 15.38 17.31 15.6 17.59 15.6H17.75Z"
                      fill="#2abbe8"
                    ></path>{" "}
                  </g>
                </svg>{" "}
                Chat
              </div>
            </div>
              <div className="d-flex justify-content-between mt-3">
                <div>Shop Owner</div>
                <div>Ram Shrestha</div>
              </div>
              <div className="d-flex mt-4">
              <FontAwesomeIcon icon={faLocationDot} className="me-2 pt-2" />
              Koteshwor,kathmandu fnskdj dskjfb dskjf This section has location of shop
              <div
                style={{
                  marginLeft: "auto",
                  cursor: "pointer",
                  display: "flex",
                  textAlign: "end",
                }}
              >
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="descriptionBox">
        <div className="DescriptionTitle">Product Description </div>
        <div>Discover the Ultima Boom 161 EQ Wireless Earbuds, a fusion of style and technology. With a sleek matte finish and dual-tone design, these Bluetooth V5.3 earbuds offer a range of up to 10 meters. Enjoy a gaming advantage with 60ms Low Latency and choose from three EQ modes for a personalized audio experience. The IPX4 Sweat Resistance ensures durability during workouts. With a total playtime of 42 hours, ASAP Charge technology, and touch controls, these earbuds are a perfect daily companion. Available in Deep Black or Mystic White, backed by a 6-month warranty and 15-day replacement guarantee. Elevate your audio with Ultima Boom 161 EQ.</div>
      </div>
      <div className="productReview">
        <div className="DescriptionTitle mb-4">Question About this product</div>
        <div> 
            REview 1
        </div>
        <div className="horizonDivider"></div>
        <div> 
            Reiew 2
        </div>
        <div className="horizonDivider"></div>
        <div> 
          Review 3
        </div>
        <div className="horizonDivider"></div>
        <div> 
            REview 4
        </div>
        <input type="text" placeholder="Feedback of product" style={{width:'100%',height:'55px',marginTop:'40px', paddingLeft:'12px'}}></input>
      </div>
      <div className="productQuestion">
        <div className="DescriptionTitle mb-4">Question About this product</div>
        <div> 
            <div>question</div>
            <div>Ans</div>
        </div>
        <div className="horizonDivider"></div>
        <div> 
            <div>question</div>
            <div>Ans</div>
        </div>
        <div className="horizonDivider"></div>
        <div> 
            <div>question</div>
            <div>Ans</div>
        </div>
        <div className="horizonDivider"></div>
        <div> 
            <div>question</div>
            <div>Ans</div>
        </div>
        <input type="text" placeholder="Question if you have any" style={{width:'100%',height:'55px',marginTop:'40px', paddingLeft:'12px'}}></input>
      </div>
      <Footer />
    </>
  );
}
