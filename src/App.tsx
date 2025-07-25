import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { AllProducts } from "./Pages/Products";
import { Login } from "./Pages/login";
import { Cart } from "./Pages/Cart";
import { SignUp } from "./Pages/SignUp";
import { AboutUs } from "./Pages/AboutUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Wallet } from "./Pages/Wallet";
import { CheckOut } from "./Pages/Checkout";
import { ContactUs } from "./Pages/Contact";
import { ViewPage } from "./Pages/ViewPage";

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/signIn" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/wallet" element={<Wallet/>} />
        <Route path="/checkOut" element={<CheckOut/>} />
        <Route path="/contactUs" element={<ContactUs/>} />
        <Route path="/viewPage/:productId" element={<ViewPage />} />

      </Routes>
    </>
  );
}

export default App;
