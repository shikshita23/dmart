import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Layout from "./Components/Layout";
import{Routes,Route} from 'react-router-dom'
import SellerAccount from "./Pages/Login/SellerAccount";
function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Layout></Layout>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
        <Route path="/SellerAccount" element={<SellerAccount></SellerAccount>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
