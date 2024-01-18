import "./App.css";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Layout from "./Components/Layout";
import Help from "./Pages/Help/Help";
import{Routes,Route} from 'react-router-dom'
import SellerAccount from "./Pages/Login/SellerAccount";
import CategoryList from "./Pages/ProductList/CategoryList";
import CheckOut from "./Pages/Checkout/Checkout";
import MyCartDetails from "./Pages/Cart/MyCartDetails";
import OrderConfirmation from "./Pages/OrderConfirmation/OrderConfirmation";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
        <Route path="/SellerAccount" element={<SellerAccount></SellerAccount>}></Route>
        <Route path="/Help" element={<Help></Help>}></Route>
        <Route path="/ProductList/:title" element={<CategoryList></CategoryList>}></Route>
        <Route path="/CartDetails" element={<MyCartDetails></MyCartDetails>}> </Route>
        <Route path="/Checkout" element={<CheckOut></CheckOut>}></Route>
        <Route path="/OrderConfirmation" element={<OrderConfirmation></OrderConfirmation>}></Route>
        <Route path="/ProductDetail/:title" element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
    </>
  );
}

export default App;
