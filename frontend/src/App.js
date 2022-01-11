import React from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartScreen from './screens/CartScreen';
import HomeScreen from "./screens/HomeScreen";
import SigninScreen from './screens/SigninScreen';  
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen'
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from './screens/OrderScreen';
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header cartItems={cartItems.length} userInfo={userInfo}/>
        <main>
          <Routes>
            <Route path="/signin" element={<SigninScreen />}/>
            <Route path="/placeorder" element={<PlaceOrderScreen />}/>
            <Route path="/cart/" element={<CartScreen />}/>
            <Route path="/cart/:id" element={<CartScreen />}/>
            <Route path="/register" element={<RegisterScreen/>}/>
            <Route path="/shipping" element={<ShippingAddressScreen/>}/>
            <Route path="/payment" element={<PaymentMethodScreen/>}/>
            <Route path="/placeorder" element={<PlaceOrderScreen/>}/>
            <Route path="/product/:id" element={<ProductScreen />}/>
            <Route path="/order/:id" component={OrderScreen}></Route>
            <Route path="/" element={<HomeScreen/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
