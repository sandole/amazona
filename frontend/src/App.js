import React from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartScreen from './screens/CartScreen';
import HomeScreen from "./screens/HomeScreen";
import SigninScreen from './screens/SigninScreen';  
import ProductScreen from "./screens/ProductScreen";
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
            <Route path="/cart/" element={<CartScreen />}/>
            <Route path="/cart/:id" element={<CartScreen />}/>
            <Route path="/product/:id" element={<ProductScreen />}/>
            <Route path="/" element={<HomeScreen/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
