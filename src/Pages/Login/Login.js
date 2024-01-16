import "../../Css/Login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="Login">
      <div className="loginHeader">
        <div className="text">Login</div>
        <div className="LoginUnderline"></div>
      </div>
      <div className="loginContainer">
        <div className="inputs">
          <div className="input py-auto">
            <input type="email" placeholder="Email id" />
          </div>
          <div className="input py-auto">
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="signUpDiv">
          Dont have an account?{" "}
          <Link to="/SignUp" className="signUpLink">
            SignUp
          </Link>
        </div>
        <input className="loginSubmit" type="submit"></input>
      </div>
    </div>
  );
}
