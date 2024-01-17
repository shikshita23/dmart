import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

import esewa from '../../assets/esewa.png';
import cod from "../../assets/COD.png"

import '../../Css/OrderConfirmation.css'
export default function OrderConfirmation(){
    return(
        <>
        <Navbar></Navbar>
        <div className="d-flex justify-content-between orderConfirmationBox"> 
        <div className="">
            <div className="orderConfirmationTitle mb-4">Select Payment Method</div>
            <div className="deliveryMethod  d-flex">
                <div className="cashOnDelivery me-4 p-2">
                    <img src={cod} alt="logo of Cas On deliver" style={{ height:'45px', margin:'auto'}} className="d-flex"></img>
                    <div className="caption text-center mt-3">Cash on Delivery</div>
                </div>
                <div className="esewa p-2">
                    <img src={esewa} alt="esewa method" style={{ height:'45px', margin:'auto'}} className="d-flex"></img>
                    <div className="caption text-center mt-3">eSewa Mobile Wallet</div>
                </div>
            </div>
        </div>
        <div>

        <div className="OrderSummary">
            <div className="orderConfirmationTitle mb-3">Order Sumamry</div>
            <div className="InvoiceNum d-flex justify-content-between mb-2">
                <div className="ContentTitle ">Invoice Number</div>
                <div>20221406</div>
             </div>
            <div className="deliveryDate d-flex justify-content-between mb-2">
                <div className="ContentTitle">Deliver Date</div>
                <div>22 jan,2023</div>
            </div>
        </div>
        <div className="paymentSummary">
            <div className="orderConfirmationTitle mb-3">Payment Sumamry</div>
            <div className="TotalPrice d-flex justify-content-between mb-2">
                <div className="ContentTitle">Total Amount</div>
                <div>Rs.5000</div>
            </div>
        </div>
        </div>
        </div>
        <Footer
        ></Footer>
        </>
    )
}