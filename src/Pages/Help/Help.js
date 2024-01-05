import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import "../../Css/Help.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import promotion from "../../assets/promotion.jpg";
import shipping from "../../assets/shipping.png";
import seller from "../../assets/seller.png";
import Payment from "../../assets/payment.png";
import account from "../../assets/account.jpg";
import refund from "../../assets/return.png";
import React, { useState } from "react";
import Accordion from "./Accordion";
export default function Help() {
  const [mainCol, setMainCol] = useState("category");
  return (
    <>
      <Navbar></Navbar>
      <div className="row w-100">
        <div className="col-3 sideColumn">
          <div className="sideBar">
            <div className="helpCategory">
              <FontAwesomeIcon icon={faList} /> Categories
            </div>

            <select name="Promotions">
              <option value="">Promotion</option>
              <option value="vourcherInformation" onClick={()=>setMainCol("Voucher Information")}>Vourcher Information</option>
              <option value="campaigns" onClick={()=>setMainCol("Campaigns")}>Campaigns</option>
            </select>

            <select name="Account Management">
              <option value="">Account Management</option>
              <option value="Privacy" onClick={()=>setMainCol("Privacy & Security")}>Privacy & Security</option>
              <option value="myAccount" onClick={()=>setMainCol("My Account")}>My Account</option>
            </select>

            <select name="Payments">
              <option value="">Payments</option>
              <option value="paymentMethod" onClick={()=>setMainCol("Payment Method")}>Payment Method</option>
            </select>

            <select name="Shipping and Delivery">
              <option value="">Shipping and Delivery</option>
              <option value="dmartExpress" onClick={()=>setMainCol("D-Mart Express")}>D-mart Express</option>
              <option value="pickUpPoints" onClick={()=>setMainCol("D-Mart Pick Up Points")}>D-mart Pick Up Points</option>
              <option value="shipping" onClick={()=>setMainCol("Shipping Journey")}>Shipping Journey</option>
              <option value="dmartVerified" onClick={()=>setMainCol("D-mart Verified")}>D-mart Verified</option>
            </select>

            <select name="Return And Refund">
              <option value="">Return And Refund</option>
              <option value="warrantyPolicy" onClick={()=>setMainCol("Warranty Policy")}>Warranty Policy</option>
              <option value="refundPolicy" onClick={()=>setMainCol("Refund Policy")}>Refund Policy</option>
              <option value="returnProcess" onClick={()=>setMainCol("Return Process")}>Return Process</option>
              <option value="refundProcess" onClick={()=>setMainCol("Refund Process")}>Refund Process</option>
            </select>

            <select name="Sell On D-Mart">
              <option value="">Sell On D-Mart</option>
              <option value="becomeSeller" onClick={()=>setMainCol("Become Seller")}>Become Seller</option>
              <option value="sellerSupports" onClick={()=>setMainCol("Seller Support")}>Seller Support</option>
            </select>
          </div>
        </div>

        <div className="col-9 mainColumn">
          <input
            type="text"
            className="searchQn"
            placeholder="Search Question"
          />
          <div className="SearchIconDiv">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="searchQnIcon"
              style={{color:'#e6d6b4'}}
            />
          </div>

          {mainCol === "category" ? (
            <div className="helpBox">
              <div className="helpTitle">Categories</div>

              <div className="row categoryRow">
                <div className="col categoryColumn">
                  <div className="d-flex" style={{ marginBottom: "10px" }}>
                    <img
                      src={promotion}
                      alt="icon of promotion"
                      style={{
                        width: "45px",
                        height: "45px",
                        marginLeft: "0px",
                        marginRight: "10px",
                      }}
                    />
                    <h6 style={{ marginTop: "auto", marginBottom: "auto" }}>
                      Promotion
                    </h6>
                  </div>
                  <div className="categoryList">
                    <div onClick={() => setMainCol("Voucher Information")}>
                      Voucher Information
                    </div>
                    <div className="helpDivider"></div>
                    <div onClick={() => setMainCol("Campaigns")}>Campaigns</div>
                  </div>
                </div>
                <div className="col categoryColumn">
                  <div className="d-flex" style={{ marginBottom: "10px" }}>
                    <img
                      src={account}
                      alt="icon of promotion"
                      style={{
                        width: "45px",
                        height: "45px",
                        marginLeft: "0px",
                        marginRight: "10px",
                      }}
                    />
                    <h6 style={{ marginTop: "auto", marginBottom: "auto" }}>
                      Account Management
                    </h6>
                  </div>
                  <div className="categoryList">
                    <div onClick={() => setMainCol("Privacy & Security")}>
                      Privacy & Security
                    </div>
                    <div className="helpDivider"></div>
                    <div onClick={() => setMainCol("My Account")}>My Account</div>
                  </div>
                </div>
              </div>

              <div className="row categoryRow">
                <div className="col categoryColumn">
                  <div className="d-flex" style={{ marginBottom: "10px" }}>
                    <img
                      src={Payment}
                      alt="icon of promotion"
                      style={{
                        width: "45px",
                        height: "45px",
                        marginLeft: "0px",
                        marginRight: "10px",
                      }}
                    />
                    <h6 style={{ marginTop: "auto", marginBottom: "auto" }}>
                      Payments
                    </h6>
                  </div>
                  <div className="categoryList">
                    <div onClick={() => setMainCol("Payment Method")}>
                      Payment Method
                    </div>
                  </div>
                </div>
                <div className="col categoryColumn">
                  <div className="d-flex" style={{ marginBottom: "10px" }}>
                    <img
                      src={shipping}
                      alt="icon of promotion"
                      style={{
                        width: "45px",
                        height: "45px",
                        marginLeft: "0px",
                        marginRight: "10px",
                      }}
                    />
                    <h6>Shipping And Delivery</h6>
                  </div>
                  <div className="categoryList">
                    <div onClick={() => setMainCol("D-Mart Express")}>
                      D-Mart Express
                    </div>
                    <div className="helpDivider"></div>
                    <div onClick={() => setMainCol("D-Mart Pick Up Points")}>
                      D-Mart Pick Up Points
                    </div>
                    <div className="helpDivider"></div>
                    <div onClick={() => setMainCol("Shipping Journey")}>
                      Shipping Journey
                    </div>
                    <div className="helpDivider"></div>
                    <div onClick={() => setMainCol("D-Mart Verified")}>
                      D-Mart Verified
                    </div>
                  </div>
                </div>
              </div>

              <div className="row categoryRow">
                <div className="col categoryColumn">
                  <div className="d-flex" style={{ marginBottom: "10px" }}>
                    <img
                      src={refund}
                      alt="icon of promotion"
                      style={{
                        width: "45px",
                        height: "45px",
                        marginLeft: "0px",
                        marginRight: "10px",
                      }}
                    />
                    <h6 style={{ marginTop: "auto", marginBottom: "auto" }}>
                      Return And Refund
                    </h6>
                  </div>
                  <div className="categoryList">
                    <div onClick={() => setMainCol("Warranty Policy")}>
                      Warranty Policy
                    </div>
                    <div className="helpDivider"></div>
                    <div onClick={() => setMainCol("Refund Policy")}>Refund Policy</div>
                    <div className="helpDivider"></div>
                    <div onClick={() => setMainCol("Return Process")}>Return Process</div>
                    <div className="helpDivider"></div>
                    <div onClick={() => setMainCol("Refund Process")}>Refund Process</div>
                  </div>
                </div>
                <div className="col categoryColumn">
                  <div className="d-flex" style={{ marginBottom: "10px" }}>
                    <img
                      src={seller}
                      alt="icon of promotion"
                      style={{
                        width: "45px",
                        height: "45px",
                        marginLeft: "0px",
                        marginRight: "10px",
                      }}
                    />
                    <h6 style={{ marginTop: "auto", marginBottom: "auto" }}>
                      Sell On D-Mart
                    </h6>
                  </div>
                  <div className="categoryList">
                    <div onClick={()=> setMainCol("Become Seller")}>Become a Seller</div>
                    <div className="helpDivider"></div>
                    <div onClick={()=> setMainCol("Seller Support")}>Seller Support</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="questions">
              <Accordion Data={{mainCol}}></Accordion>
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
