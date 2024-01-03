import { useState } from "react";
import "../../Css/SellerAccount.css";
export default function SellerAccount() {
  const [nameOfOwner, setNameOfOwner] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameOfShop, setNameOfShop] = useState("");
  const [addressOfShop, setAddressOfShop] = useState("");
  const [panNumber, setPanNumber] = useState("");

  const [detailPage, setDetailPage] = useState("personal");

  return (
    <div className="sellerAccountContainer">
      <div className="title">Create an Account</div>
      <div className="sellerAccount">
        <div className="line"></div>
        <button
          className="personalDetails"
          onClick={() => setDetailPage("personal")}
        >
          Person Details
        </button>
        <button className="shopDetails" onClick={() => setDetailPage("shop")}>
          Shop Details
        </button>
        <button
          className="submitButtonTop"
          onClick={() => setDetailPage("submit")}
        >
          Submit
        </button>
        {detailPage === "personal" ? (
          <div>
            <form className="selelrAccountForm">
              <label>
                Name Of Owner:
                <input
                  type="text"
                  name="nameOfOwner"
                  value={nameOfOwner}
                  onChange={(e) => setNameOfOwner(e.target.value)}
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="text"
                  name="Phonenumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="emailAddress"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </form>
          </div>
        ) : (
          <div></div>
        )}
        {detailPage === "shop" ? (
          <div>
            <form className="ShopForm">
              <label>
                Name Of Shop:
                <input
                  type="text"
                  name="nameOfShop"
                  value={nameOfShop}
                  onChange={(e) => setNameOfShop(e.target.value)}
                />
              </label>
              <label>
                Address Of Shop:
                <input
                  type="text"
                  name="addressOfShop"
                  value={addressOfShop}
                  onChange={(e) => setAddressOfShop(e.target.value)}
                />
              </label>
              <label>
                Pan Number:
                <input
                  type="text"
                  name="panNumber"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value)}
                />
              </label>
            </form>
          </div>
        ) : (
          <div></div>
        )}

        {detailPage === "submit" ? (
          <div className="submitDiv">
            <p>
              Eget nulla facilisi etiam dignissim diam. Aliquam ultrices sagittis orci a scelerisque purus. Tellus mauris a diam maecenas sed enim ut sem. Est ultricies integer quis auctor. Ac turpisegestas sed tempus. . Aenean et tortor at risus. Sit amet commodo nulla facilisi.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
            </p>
            <label className="agreeLabel">
              I agree
              <input type="checkbox" className="checkbox" />
            </label>
            <button className="DoneButton">Submit</button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
