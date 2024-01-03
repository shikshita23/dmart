import { useState } from "react";
import "../../Css/SignUp.css";
import { Link } from "react-router-dom";
function SignUp() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const saveData = () => {
    setData(name, phoneNumber, address, email, password);
    console.log(name, phoneNumber, address, email, password);
  };

  const handleChange = (event) => {
    saveData();
    event.preventDefault();
  };
  return (
    <div className="signUpContainer">
      <div className="formTitle">Sign Up</div>
      <div className="signUpUnderline"></div>
      <form id="forms" onSubmit={handleChange}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          PhoneNumber:
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <label>
          Address:
          <select value={address} onChange={(e) => setAddress(e.target.value)}>
            <option>Kathmandu</option>
            <option>Bhaktapur</option>
            <option>Lalitpur</option>
          </select>
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="loginLink">
          Have an account?
          <Link to="/Login" className="login">
            {" "}
            Login
          </Link>
        </div>
        <input className="submitButton" type="submit"></input>
      </form>
    </div>
  );
}

export default SignUp;
