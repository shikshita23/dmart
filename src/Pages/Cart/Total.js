import { Link } from "react-router-dom"

export default function Total(props){
    return(
        <>
         <div className="orderSummaryCart">
              <div className="orderSummaryCartTitle">Order Summary</div>
              <div className="cartProductDetails mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <div>Subtotal:</div>
                  <div>Rs.</div>
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
        </>
    )
}