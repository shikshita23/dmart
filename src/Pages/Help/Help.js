import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import "../../Css/Help.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faChevronUp,
  faChevronDown,
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
  const [Promotion, setPromotion] = useState(false);
  const [Account, setAccount] = useState(false);
  const [Payments, setPayments] = useState(false);
  const [Shipping, setShipping] = useState(false);
  const [Refund, setRefund] = useState(false);
  const [Seller, setSeller] = useState(false);
  return (
    <>
      <Navbar></Navbar>
      <div className="row w-100">
        <div className="col-3 sideColumn">
          <div className="sideBar">
            <div className="helpCategory">
              <FontAwesomeIcon icon={faList} style={{ marginRight: "15px" }} />{" "}
              Categories
            </div>

            <div className="sidebarOptions">
              <div className="sideBarDropDown">
                <div className=" d-flex" onClick={() => setPromotion(!Promotion)} style={{cursor:'pointer'}}>
                  <div className="sidebarTopic">Promotions</div>
                  {Promotion === false ? (
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
                {Promotion === true ? (
                  <div className="sidebarOption">
                    <div onClick={() => setMainCol("Voucher Information")}>
                      Voucher Information
                    </div>
                    <div onClick={() => setMainCol("Campaigns")}>Campaigns</div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="sideBarDropDown">
                <div className=" d-flex" onClick={() => setAccount(!Account)} style={{cursor:'pointer'}}>
                  <div className="sidebarTopic">Account Management</div>
                  {Account === false ? (
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
                {Account === true ? (
                  <div className="sidebarOption">
                    <div onClick={() => setMainCol("Privacy & Security")}>
                      Privacy & Security
                    </div>
                    <div onClick={() => setMainCol("My Account")}>
                      My Account
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="sideBarDropDown">
                <div className=" d-flex" onClick={() => setPayments(!Payments)} style={{cursor:'pointer'}}>
                  <div className="sidebarTopic">Payments</div>
                  {Payments === false ? (
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
                {Payments === true ? (
                  <div className="sidebarOption">
                    <div onClick={() => setMainCol("Payment Method")}>
                      Payment Method
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="sideBarDropDown">
                <div className=" d-flex" onClick={() => setShipping(!Shipping)} style={{cursor:'pointer'}}>
                  <div className="sidebarTopic">Shipping And Delivery</div>
                  {Shipping === false ? (
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
                {Shipping === true ? (
                  <div className="sidebarOption">
                    <div onClick={() => setMainCol("D-Mart Express")}>
                      D-Mart Express
                    </div>
                    <div onClick={() => setMainCol("D-MArt Pick Up Points")}>
                      D-Mart Pick Up Points
                    </div>
                    <div onClick={() => setMainCol("Shipping Journey")}>
                      Shipping Journey
                    </div>
                    <div onClick={() => setMainCol("D-Mart Verified")}>
                      D-Mart Verified
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="sideBarDropDown">
                <div className=" d-flex" onClick={() => setRefund(!Refund)} style={{cursor:'pointer'}}>
                  <div className="sidebarTopic">Return and refund</div>
                  {Refund === false ? (
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
                {Refund === true ? (
                  <div className="sidebarOption">
                    <div onClick={() => setMainCol("Warranty Policy")}>
                      Warranty Policy
                    </div>
                    <div onClick={() => setMainCol("Refund Policy")}>
                      Refund Policy
                    </div>
                    <div onClick={() => setMainCol("Return Process")}>
                      Return Process
                    </div>
                    <div onClick={() => setMainCol("Refund Process")}>
                      Refund Process
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="sideBarDropDown">
                <div className=" d-flex" onClick={() => setSeller(!Seller)} style={{cursor: "pointer"}}>
                  <div className="sidebarTopic">Sell on D-MArt</div>
                  {Seller === false ? (
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
                {Seller === true ? (
                  <div className="sidebarOption">
                    <div onClick={() => setMainCol("Become Seller")}>
                      Become Seller
                    </div>
                    <div onClick={() => setMainCol("Seller Support")}>
                      Seller Support
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-9 mainColumn">

          {mainCol === "category" ? (
            <div className="helpBox">

              <div className="row categoryRow">
                <div className="col categoryColumn">
                  <div className="d-flex" style={{ marginBottom: "10px" }}>
                    <img
                      src={promotion}
                      alt="icon of promotion"
                      style={{
                        width: "43px",
                        height: "43px",
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
                        width: "43px",
                        height: "43px",
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
                    <div onClick={() => setMainCol("My Account")}>
                      My Account
                    </div>
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
                        width: "43px",
                        height: "43px",
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
                        width: "43px",
                        height: "43px",
                        marginLeft: "0px",
                        marginRight: "10px",
                      }}
                    />
                    <h6 style={{ marginTop: "auto", marginBottom: "auto" }}>
                      Shipping And Delivery
                    </h6>
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
                        width: "43px",
                        height: "43px",
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
                    <div onClick={() => setMainCol("Refund Policy")}>
                      Refund Policy
                    </div>
                    <div className="helpDivider"></div>
                    <div onClick={() => setMainCol("Return Process")}>
                      Return Process
                    </div>
                    <div className="helpDivider"></div>
                    <div onClick={() => setMainCol("Refund Process")}>
                      Refund Process
                    </div>
                  </div>
                </div>
                <div className="col categoryColumn">
                  <div className="d-flex" style={{ marginBottom: "10px" }}>
                    <img
                      src={seller}
                      alt="icon of promotion"
                      style={{
                        width: "43px",
                        height: "43px",
                        marginLeft: "0px",
                        marginRight: "10px",
                      }}
                    />
                    <h6 style={{ marginTop: "auto", marginBottom: "auto" }}>
                      Sell On D-Mart
                    </h6>
                  </div>
                  <div className="categoryList">
                    <div onClick={() => setMainCol("Become Seller")}>
                      Become a Seller
                    </div>
                    <div className="helpDivider"></div>
                    <div onClick={() => setMainCol("Seller Support")}>
                      Seller Support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="questions">
              <Accordion Data={{ mainCol }}></Accordion>
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
