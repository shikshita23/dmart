import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import OrderSummary from "../Cart/OrderSummary";
import "../../Css/Checkout.css";
import pic from "../../assets/carousel1.png"
export default function CheckOut(){
    return(
        <>
        <Navbar></Navbar>
        <div>

        <div className="PaymentBox mb-4">Payment CheckOut</div>
        <div className="d-flex justify-content-between" style={{ width: "100%" }}>
            <div className="checkoutDiv">
                <div className="deliveryDetails ps-4 pe-4 pb-3 pt-3">
                        <div className="deliverTo">Deliver To: Chicken Station</div>
                    <div className="d-flex">
                        <div className="phoneNumber me-4">9876541152</div>
                        <div className="Address mr-2">kathmandu koteshwor tinkuney near sanima bank</div>
                    </div>
                   <div className="Emai">ram@gmail.com</div>
                </div>
                <div className="OrderItemsDetails ps-4 pe-4">
                    <div className="mb-2">shop Name</div>
                    <div className="OrderedItem ">
                        <div className="OrderedItemImage"><img src={pic} alt="item1"/></div>
                        <div className="OrderedItemTitle">Item Name</div>
                        <div className="OrderedItemQuantity">1</div>
                        <div className="OrderedItemPrice">Rs.1500</div>
                    </div>
                    <div className="horizontalDivider"></div>
                    <div className="mb-2">shop Name</div>
                    <div className="OrderedItem">
                        <div className="OrderedItemImage"><img src={pic} alt="item1"/></div>
                        <div className="OrderedItemTitle">Item Name</div>
                        <div className="OrderedItemQuantity">1</div>
                        <div className="OrderedItemPrice">Rs.1500</div>
                    </div>
                </div>
            </div>
            <OrderSummary buttonName={"Place Order"} add={"/OrderConfirmation"}></OrderSummary>
      </div>
        </div>
        <Footer></Footer>
        </>
    )
}