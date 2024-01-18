import { useContext, useState } from "react";
import { cartItems } from "./CartApi";
import CartDetails from "./CartDetails";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "../../Css/CartDetails.css";
import OrderSummary from "./OrderSummary";
export default function MyCartDetails() {
  const [cartItemsDetails, setCartItemsDetails] = useState(cartItems);
  return (
    <>
      <Navbar></Navbar>
        <div className="cartTitle">Items In the Cart</div>
      <div className="cart d-flex" >
      <div className="d-flex justify-content-between" style={{ width: "100%" }}>
        <div className="cartDetails">
          <div className=" row d-flex align-items-center">
            {cartItemsDetails.map((cartItems, i) => {
              return <CartDetails key={i} {...cartItems}> </CartDetails>;
            })}
          </div>
          </div>
          <OrderSummary buttonName={"Proceed To Checkout"} add={"/Checkout"}></OrderSummary>
      </div>
      </div>
      <Footer></Footer>
      
    </>
  );
}
