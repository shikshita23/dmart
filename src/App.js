import "./App.css";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Layout from "./Components/Layout";
import Help from "./Pages/Help/Help";
import{Routes,Route} from 'react-router-dom'
import SellerAccount from "./Pages/Login/SellerAccount";
import CategoryList from "./Pages/CatagoryList/CategoryList";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
        <Route path="/SellerAccount" element={<SellerAccount></SellerAccount>}></Route>
        <Route path="/Help" element={<Help></Help>}></Route>
        <Route path="/CategoryList" element={<CategoryList></CategoryList>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
